'use strict';

// Pull .env into process.env
// require('dotenv').config({ debug: true  });

let Util = require('node:util'); 
let Path = require('path');
let Hapi = require('@hapi/hapi');
let Blipp = require('blipp')
let HapiPino = require('hapi-pino')
let{ klona } = require('klona/full');

let Inert = require('@hapi/inert');
let Vision = require('@hapi/vision');
let HapiSwagger = require('hapi-swagger');
let { log, logError } = require('./utils.js');

// initialize knex and objection

let Pg = require('pg')

// handle the "'bigint' type is a string" problem (happens in count(*) queries)
// https://github.com/knex/knex/issues/387
Pg.types.setTypeParser(20, 'text', parseInt);  

let knexInstance = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    application_name: process.env.PGAPPNAME
  }
});

let { Model } = require('objection');

Model.knex(knexInstance);

let Exiting = require('exiting');
let { sql } = require('./sql.js');

process.title = process.env.API_PROCESS_NAME;


async function main () {

  // 1 - create server

	let server = Hapi.server({
    port: process.env.API_PORT,
    debug: false
  });

  // prepare out wrapper around server.log

  log.configure({ server });

  // 2 - add "server extension points": onPreStart, onPostStart, onPreStop, onPostStop
  // https://hapi.dev/api/?v=21.3.2#-serverextevents

  // note that hapi-pino will add listeners to onPostStart and onPostStart
  // https://github.com/hapijs/hapi-pino#hapi-events

  async function onPreStart (server) {
    
    log('onPreStart');
  };

  async function onPostStart (server) {
    
    log('onPostStart');

    try {
      let result = await sql`select version()`;
      log({ result })
    }
    catch(err) {
      logError(err);
      throw err;
    }

  };

  async function onPreStop (server) {

    log('onPreStop, start');

    // reject new queries and return a Promise which resolves when all queries are finished;
    // timeout is given in seconds;

    await sql.end({ timeout: process.env.APP_MODE === 'dev' ? 1 : 10 });

    log('onPreStop, before return');
  };

  async function onPostStop (server) {
       
    log('onPostStop');
  };

  server.ext('onPreStart', onPreStart);
  server.ext('onPostStart', onPostStart);
  server.ext('onPreStop', onPreStop);  
  server.ext('onPostStop', onPostStop);


  // 3.1 - we can also register any of the 8 "request extension points" / "request lifecycle methods":
  // https://futurestud.io/files/hapi/hapi-request-lifecycle.pdf
  // https://hapi.dev/api/?v=21.3.2#request-lifecycle

  let extensionPointList = [
    // 'onRequest', 
    // 'onPreAuth',
    // 'onCredentials',
    // 'onPostAuth',
    // 'onPreHandler',
    // 'onPostHandler',
    // 'onPreResponse',
    // 'onPostResponse',
  ]

  for (let extensionPoint of extensionPointList) {

    server.ext(extensionPoint, function (request, h) { 

      log(`request lifecycle: ${extensionPoint}`); 

      // "Each lifecycle method must return a value or a promise that resolves into a value."

      return h.continue; 
    });
  }

  // server.ext('onPostResponse', function (request, h) { 

  //   log(`request lifecycle: onPostResponse xxx`); 
  //   log(request)

  //   // "Each lifecycle method must return a value or a promise that resolves into a value."

  //   return h.continue; 
  // });


  // 3.2 - we can also listen to other server events that might be of interest
  // https://hapi.dev/api/?v=21.3.2#-serverevents

  // note that hapi-pino will listen to 'log' and 'request' (but will some filtering)
  // https://github.com/hapijs/hapi-pino#hapi-events

  let eventNameList = [
    'start',
    'closing',
    'stop',
      // 'response', 
    'cachePolicy',
      // 'log',
    // 'route',
      'request'
  ];

  for (let eventName of eventNameList) {
    server.events.on(eventName, function () { 

      log(`server event: ${eventName}`) 

    });
  }

  // 4 - register external plugins

  // await server.register({
  //   plugin: require('@hapi/h2o2'),
  //   options: {}
  // });

	await server.register({
		plugin: Blipp,
		options: {
			showAuth: true,
			showScope: true,
			showStart: true,
		}
	});

  await server.register({
    plugin: HapiPino,
    options: {
      // transport: {
      //   target: 'pino-pretty',
      //   options: {
      //     colorize: true,
      //     // minimumLevel: "info",
      //     // levelFirst: true,
      //     // messageFormat: true,
      //     // timestampKey: "time",
      //     // translateTime: true,
      //     // singleLine: false,
      //     // mkdir: true,
      //     // append: true,
      //   }
      // },
      level: 'info',
      redact: {
        paths: [
          'pid',
          // 'hostname',
          'req',
          'res',
          'tags',
          //'req.id', 'req.query', 'req.headers', 'req.remoteAddress', 'req.remotePort',
          //'res.headers',
          'responseTime'

        ],
        remove: true
      },
      // logPayload: true,
      // logQueryParams: true,

      customRequestStartLevel: 'error',
      logRequestStart: true,
      customRequestStartMessage: req => `[REQUEST STARTED] ${req.method.toUpperCase()} ${req.raw.req.url}`,

      logRequestComplete: true,
      customRequestCompleteMessage: (req, resTime) => `[REQUEST COMPLETED, ${resTime}ms] ${req.method.toUpperCase()} ${req.raw.req.url} ${req.raw.res.statusCode}`,

      // customRequestErrorMessage

      // customRequestStartMessage: req => `${Util.inspect(req)}`,
      // logRouteTags: true,
      log4xxResponseErrors: true,
      mergeHapiLogData: true,

      // logEvents: ['onPostStart', 'onPostStop', 'response', 'request-error'],
      logEvents: ['onPreStart', 'onPostStart', 'onPreStop', 'onPostStop', 'response', 'request-error', 'log'],
      

      ignoreFunc: function(options, request) {

        if (request.path.toLowerCase().startsWith('/api/v2/swagger')) {
          return true;
        }

        return false;
      }
    }
  });



  await server.register({
    plugin: Inert,
    options: {}
  });

  await server.register({
    plugin: Vision,
    options: {}
  });

  await server.register({
    plugin: HapiSwagger,
    options: {
      schemes: ['https'],
      // host: `https://api.h2optimum.2adapt.${process.env.APP_MODE === 'dev' ? 'local' : 'pt'}`,
      jsonPath: '/api/v2/swagger/swagger.json',
      //basePath: '/api/v2',
      // tags: ['device', 'auth'],

      // this list will manually define the order of the endpoints in the UI
      tags: [
        // { name: '...', description: '...' },
        { name: 'session' },
        { name: 'device' },
        { name: 'user' },
        { name: 'measurement' },

      ],
      info: {
          title: 'API documentation for h2optimum',
          version: 'v2',
          description: 'description',
          // contact: {
          //   name: 'Paulo Vieira',
          //   email: 'x@y.com'
          // },
        },
        routeTag: 'api',
        grouping: 'tags',
        tagsGroupingFilter: (tag) => tag !== 'api',
        documentationPath: '/api/v2/swagger/documentation',  // base path for the ui
        swaggerUIPath: '/api/v2/swagger/documentation/',  // base path for css and js files of the ui
        sortTags: 'unsorted',
        sortEndpoints: 'ordered',
        uiOptions: {
          showExtensions: false,
          useUnsafeMarkdown: true,
          syntaxHighlight: {
            theme: 'monokai'
          },
          supportedSubmitMethods: [], // disables "Try it out" for all operations
        },
        uiCompleteScript: `

(function() {

  let el;

  // 1 - hide topbar

  el = document.querySelector('div.topbar');

  if (el != null) {
    el.style['display'] = 'none';
  }  

  // 2 - hide base url

  el = document.querySelector('pre.base-url');

  if (el != null) {
    el.style['display'] = 'none';
    el.nextElementSibling.style['display'] = 'none';
  }

  // 3 - hide scheme selector

  el = document.querySelector('div.scheme-container');

  if (el != null) {
    el.style['display'] = 'none';
  }  

  // 4 - hide models

  el = document.querySelector('section.models');

  if (el != null) {
    el.style['display'] = 'none';
  }  

})()


        `
      }
  });

  await server.register({
    plugin: require('@hapi/cookie'),
    options: {}
  });

  // 5 - register internal plugins

  await server.register({
    plugin: require('./auth.js'),
    options: {}
  });

	await server.register({
		plugin: require('./user.js'),
		options: {}
	});

  await server.register({
    plugin: require('./installation.js'),
    options: {}
  });

  await server.register({
    plugin: require('./device.js'),
    options: {}
  });

  await server.register({
    plugin: require('./measurement.js'),
    options: {}
  });
 

  // last step: start the server; server and process life-cycle will be managed by exiting, so don't call server.start()
  // note that the plugins might also add extensions to onPreStart, etc, so this call should be done after all server.register

  // await server.start();

  let serverManager = Exiting.createManager(server, { exitTimeout: 30 * 1000 });  
  await serverManager.start();


  // setTimeout(() => {

  //   log('testing the logger', {x: 1})
  //   logError('testing the logger', {x: 2})
  // }, 1000)



    // simulation of several cases where serverManager (provided by exiting) is helping us to 
    // gracefully shutdown the server; in all of these cases the onPreStop hook is still called by 
    // the manager; this won't happen if we use `server.start()` instead of `await serverManager.start()`;


    // 1) force uncaughtException

    // process.on('uncaughtException', (err) => {
    //  console.log(`process.on('uncaughtException')`, { err })
    // });
    // 

    // setTimeout(() => { xxx }, 1000);


    // 2) forced unhandledRejection; notice that `.catch()` or `.then()` is missing
    // 

    // setTimeout(() => { Promise.resolve().then(() => JSON.parse('{"this is invalid json": true')) }, 1000);

   //  process.on('unhandledRejection', (err) => {
   //    console.log(`process.on('unhandledRejection')`, { err })
   //  });

    // 3) forced process.exit()

    // setTimeout(() => { process.exit(1) }, 1000);

};

main();

