'use strict';

// Pull .env into process.env
// require('dotenv').config({ debug: true  });

let Path = require('path');
let Hapi = require('@hapi/hapi');
let Blipp = require('blipp')

let Inert = require('@hapi/inert');
let Vision = require('@hapi/vision');
let HapiSwagger = require('hapi-swagger');

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

async function delay(ms) {

  return new Promise(resolve => { setTimeout(resolve, ms) })
}

async function main () {
 
  try {
    let result = await sql`select version()`;

    console.log({ result })

    // setInterval(() => {

    //   await sql`select version(6)`;
    // }, 2 * 1000)


    // for (let idx = 0; idx < 1; idx++) {

    //   setTimeout(async () => {

    //     console.log('query 1 started', idx)
    //     await sql`select delay(5)`;
    //     console.log('query 1 finished', idx)
    //   }, idx * 1000)      
    // }


    // setTimeout(async () => {

    //   console.log('query 2 started')
    //   await sql`select delay(20)`;
    //   console.log('query 2 finished')
    // }, 5 * 1000)

    // setTimeout(async () => {

    //   console.log('query 3 started')
    //   await sql`select delay(10)`;
    //   console.log('query 3 finished')
    // }, 20 * 1000)

  }
  catch(err) {
    console.log(err);
  }


	let server = Hapi.server({
    port: process.env.API_PORT
  });

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
      tags: [
        // { name: '...', description: '...' },
        { name: 'device' },
        { name: 'session' }
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

	// await server.register({
	// 	plugin: require('./routes/xyz.js'),
	// 	options: {}
	// });

  // register auth plugin
  // await server.register({
  //   plugin: authBearer
  // });
  // server.auth.strategy('bearer', 'bearer-access-token', authConfig);
  // server.auth.default('bearer');






  // the 8 "request extension points"
  // request lifecycle: https://futurestud.io/files/hapi/hapi-request-lifecycle.pdf
  // https://hapi.dev/api/?v=21.3.0#request-lifecycle

  // function onRequest (request, h) {

  //   console.log('onRequest');
  //   return h.continue;
  // };

  // server.ext('onRequest', onRequest);

  // function onPreAuth (request, h) {

  //   console.log('onPreAuth');
  //   return h.continue;
  // };

  // server.ext('onPreAuth', onPreAuth);

  // function onCredentials (request, h) {

  //   console.log('onCredentials');
  //   return h.continue;
  // };

  // server.ext('onCredentials', onCredentials);

  // function onPostAuth (request, h) {

  //   console.log('onPostAuth');
  //   return h.continue;
  // };

  // server.ext('onPostAuth', onPostAuth);

  // function onPreHandler (request, h) {

  //   console.log('onPreHandler');
  //   return h.continue;
  // };

  // server.ext('onPreHandler', onPreHandler);


  // function onPostHandler (request, h) {

  //   console.log('onPostHandler');
  //   return h.continue;
  // };

  // server.ext('onPostHandler', onPostHandler);

  // function onPreResponse (request, h) {
    
  //   console.log('onPreResponse');
  //   return h.continue;
  // };

  // server.ext('onPreResponse', onPreResponse, { after: 'xyz' });

  // function onPostResponse (request, h) {
    
  //   console.log('onPostResponse');
  //   return h.continue;
  // };

  // server.ext('onPostResponse', onPostResponse);


  // "server extension points": onPreStart and onPostStart
  // https://hapi.dev/api/?v=21.3.0#-serverextevents

  function onPreStart (server) {
    
    console.log('onPreStart');
  };

  function onPostStart (server) {
    
    console.log('onPostStart');
  };

  server.ext('onPreStart', onPreStart);
  server.ext('onPostStart', onPostStart);

  let serverManager;

  // "server extension points": onPreStop and onPostStop
  // https://hapi.dev/api/?v=21.3.0#-serverextevents

  async function onPreStop (server) {

    console.log('onPreStop');

    // serverManager.stop();

    // reject new queries and return a Promise which resolves when all queries are finished;
    // timeout is given in seconds;

    // await sql.end({ timeout: process.env.APP_MODE === 'dev' ? 1 : 10  });
    await sql.end({ timeout: process.env.APP_MODE === 'dev' ? 1 : 10 });

    console.log('onPreStop 2, return');
  };

  server.ext('onPreStop', onPreStop);

  // async function onPostStop (server) {
  //    
  //   // serverManager.stop();
  //   console.log('onPostStop - is this ever called?');
  // };
  //
  // server.ext('onPostStop', onPostStop);
  
  // logger().info('Server running on: ', server.info.uri);


  // server.events.on('start', () => {
  //
  //     console.log(`on('start')`);
  // });

  // server.events.on('request', (request, ev, tags) => {
  //
  //   console.log(`on('request')`)
  // });

  // server.events.on('response', (request) => {
  //
  //   console.log(`on('response')`)
  // });

  // server.events.on('closing', () => {
  //
  //     console.log(`on('closing')`);
  // });

  // server.events.on('stop', () => {
  //
  //     console.log(`on('stop')`);
  // });

  // server.events.on('log', (ev, tags) => {
  //
  //   if (tags.error) {
  //     console.log(`Server error: ${ev.error ? ev.error.message : 'unknown'}`);
  //   }
  // });
  


  // server and process life-cycle will now be managed by exiting.

  serverManager = Exiting.createManager(server, { exitTimeout: 30 * 1000 });
  await serverManager.start();
  // await server.start();

  server.log(['start'], `Server started at ${server.info.uri}`);


	// simulation of several cases where the manager provided by the exiting module is helping us to 
	// gracefully shutdown the server; in all of these cases the onPreStop hook is still called by 
	// the manager (which doesn't happen if we use `server.start()` instead of `await serverManager.start()`);


	// 1) force uncaughtException

	// process.on('uncaughtException', (err) => {
	// 	console.log(`process.on('uncaughtException')`, { err })
	// });
	// 

	// setTimeout(() => { xxx }, 1000);


	// 2) forced unhandledRejection; notice that `.catch()` or `.then()` is missing
  // 

	// setTimeout(() => { Promise.resolve().then(() => JSON.parse('{"x":1')) }, 1000);

 //  process.on('unhandledRejection', (err) => {
 //    console.log(`process.on('unhandledRejection')`, { err })
 //  });

	// 3) forced process.exit()

	// setTimeout(() => { process.exit(1) }, 1000);



};

main();

