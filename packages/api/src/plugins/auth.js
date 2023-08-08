'use strict';

let Path = require('path');
let Boom = require('@hapi/boom');
let Joi = require('joi');
let { sql } = require('./sql.js');
let { log, logError } = require('./utils.js');

let internals = {
	pluginName: Path.parse(__filename).name
};

function register(server, options) {

	log(`register plugin: ${internals.pluginName}`, { options })



	server.auth.strategy('session', 'cookie', {
		cookie: {
		    name: 'sid',
		    password: process.env.API_IRON_PASSWORD,
		    ttl: 1 * 24 * 60 * 60 * 1000,
		    path: '/',
		    clearInvalid: true,
		    // isSecure: (process.env.MODE === 'production') ? true : false, // use false to be able use http in localhost
		    isSecure: false,
		    isHttpOnly: true
		    
		},
		keepAlive: true,

		// an optional session validation function used to validate the content of the 
		// session cookie  on each request. Used to verify that the internal session state 
		// is still valid (e.g. user account still exists).
		
		validate: async (request, session) => {


		    // console.log('request', request)

		    // let userObj = internals.getUser(session.username);
		    // console.log('validate', { session })

		    // if (userObj == null) {
		    //     return { isValid: false };
		    // }

		    //return { isValid: true, credentials: userObj };
		    return { isValid: true };
		}
	});

	let notes, description;
	let tags = ['api', 'session'];

	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/auth/who \
--request GET \
--include \
--insecure \
--cookie cookies.txt

	*/

	description = 'Get details about the session (stored in a cookie)';
	notes = `

Examples: 

\`\`\`

curl ${process.env.API_ORIGIN}/api/v2/auth/who \\
--request GET \\
--cookie cookies.txt

\`\`\`

The client should send a \`sid\` cookie containing the session data (see the \`POST /api/v2/auth/login\` endpoint below).


	`;

	server.route({
	    method: 'get',
	    path: '/api/v2/auth/who',
	    options: {
	        auth: {
	            mode: 'try',
	            strategy: 'session',
	        },
	        cors: {
	            origin: ['*']
	        },
	        // validate: ...,
	        response: {
	        	schema: Joi.object({
	        		isAuthenticated: Joi.bool().required(),
	        		credentials: Joi.object({
	        			id: Joi.number().integer(),
	        			email: Joi.string().email(),
	        			first_name: Joi.string().allow(''),
	        			last_name: Joi.string().allow(''),
	        			is_admin: Joi.bool(),
	        			logged_in_at: Joi.date().iso()
	        		}).allow(null),
	        	}),
	        	failAction: (request, h, err) => { logError(err); throw err; }
	        	// failAction: 'log'
	        },

	        // documentation

	        description,
	        notes,
	        tags,
	        plugins: {
	            'hapi-swagger': { order: 10 }
	        },
	    },
        handler: async (request, h) => {

            //console.log('request.auth', request.auth);

            // setTimeout(() => {

            //   // server.logger().info('another way for accessing it')
            //   // server.log(['subsystem'], 'third way for accessing it')
            //   request.log(['a', 'b'], 'Request into hello world')
            //   request.logger.info('In handler %s', request.path)

            // }, 2000)

            request.log('hello xxx 1')
            request.logger.info('hello xxx 2')

            request.log(['stuff'], {'request.auth': request.auth})
            request.logger.info({'request.auth': request.auth})

            return {
				isAuthenticated: request.auth.isAuthenticated,
				credentials: request.auth.credentials,
				// artifacts: request.auth.credentials,
				// _NOTE: 'artifacts is deprecated'
            };
        }
	});


	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/auth/login \
--request POST \
--include \
--insecure \
--cookie cookies.txt \
--header "content-type: application/json" \
--data '{"username":"info@2adapt.pt", "password":"info@2adapt.pt"}' \
--cookie-jar cookies.txt


	*/

	description = 'Create a new session';
	notes = `

Examples: 

\`\`\`

curl ${process.env.API_ORIGIN}/api/v2/auth/login \\
--request POST \\
--header "content-type: application/json" \\
--data '{"username":"...", "password":"..."}' \\
--cookie cookies.txt \\
--cookie-jar cookies.txt

\`\`\`

If the username and password are correct, the response will have a \`set-cookie\` header relative to the \`sid\` cookie, where the value is the session data. The file \`cookies.txt\` (the "cookie jar") will automatically be created or updated by \`curl\`.

The response payload will be one of these shapes:

\`\`\`
{ "success": true }
\`\`\`

\`\`\`
{ "success": false, "reason": "already-authenticated" }
\`\`\`

\`\`\`
{ "success": false, "reason": "invalid-email" }
\`\`\`

\`\`\`
{ "success": false, "reason": "invalid-password" }
\`\`\`

	`;

	server.route({
	    method: 'post',
	    path: '/api/v2/auth/login',
	    options: {
			auth: {
				mode: 'try',
				strategy: 'session',
			},
			cors: {
			    origin: ['*']
			},
			validate: {
				payload: Joi.object({
					username: Joi.string().required().description('The email address relative to the user account'),
				    password: Joi.string().required(),
				}),
				failAction: (request, h, err) => { logError(err); throw err; }
			},
			response: {
				schema: Joi.object({
					success: Joi.bool().required().example(false),
					reason: Joi.string().valid('already-authenticated', 'invalid-email', 'invalid-password'),
				}),
				failAction: (request, h, err) => { logError(err); throw err; }
				// failAction: 'log'
			},

			// documentation

			description,
			notes,
			tags,
			plugins: {
			    'hapi-swagger': { order: 20 }
			},
	    },
        handler: async (request, h) => {

			if (request.auth.isAuthenticated) {
				return { success: false, reason: 'already-authenticated' }
			}

			console.log({ 'request.state': request.state })

			try {
				let {
					username: username_submitted,
					password: password_submitted
				} = request.payload;

				let userList = await sql`

				select 
					id,
					email,
					coalesce(first_name, '') as first_name,
					coalesce(last_name, '') as last_name,
					is_admin,
					pw_hash
				from t_users
				where email = ${username_submitted}

				`;

				console.log({ userList })

				let userObj = userList.find(o => o.email === username_submitted);

				if (userObj == null) {
					return { success: false, reason: 'invalid-email' };
				}

				console.log({ userObj })

				if (userObj.pw_hash !== password_submitted) {
					return { success: false, reason: 'invalid-password' };
				}

				let sessionData = { 
					// username: username_submitted,
					// isAdmin: (userObj.idx === 0 || userObj.user_email === 'info@2adapt.pt'),
					// now: (new Date()).toISOString()

					id: userObj.id,
					email: userObj.email,
					first_name: userObj.first_name,
					last_name: userObj.last_name,
					is_admin: userObj.is_admin,
					logged_in_at: new Date().toISOString()
				};
				console.log({ sessionData });
				request.cookieAuth.set(sessionData);

				// h.state('login-count', { now: Date.now() });
				return h.response({ success: true })
					// .header('X-Custom', 'some-value')
					//.header('Access-Control-Allow-Credentials', 'true')  // should be defined in cors?
					//.header('Access-Control-Expose-Headers', 'Set-Cookie')  // should be defined in cors?


				//return { success: true };
			}
			catch(err) {
				return Boom.badImplementation(err);
			}



        }
	});

	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/auth/logout \
--request POST \
--include \
--insecure \
--cookie cookies.txt \
--cookie-jar cookies.txt

	*/

	description = 'Delete a session';
	notes = `

Examples: 

\`\`\`

curl ${process.env.API_ORIGIN}/api/v2/auth/logout \\
--request GET \\
--cookie cookies.txt \\
--cookie-jar cookies.txt

\`\`\`

or

\`\`\`

curl ${process.env.API_ORIGIN}/api/v2/auth/logout \\
--request POST \\
--cookie cookies.txt \\
--cookie-jar cookies.txt

\`\`\`

the response will have a \`set-cookie\` header relative to the \`sid\` cookie with an empty value. This will delete the \`sid\` cookie. The file \`cookies.txt\` (the "cookie jar") will automatically be updated by curl.


	`;

	server.route({
	    method: ['get', 'post'],
	    path: '/api/v2/auth/logout',
	    options: {
	    	tags,
			auth: {
				mode: 'try',
				strategy: 'session',
			},
			cors: {
			    origin: ['*']
			},
			// validate: ...,
			response: {
				schema: Joi.object({
					success: Joi.bool().required(),
				}),
				failAction: (request, h, err) => { logError(err); throw err; }
				// failAction: 'log'
			},

			// documentation

			description,
			notes,
			tags,
			plugins: {
			    'hapi-swagger': { order: 30 }
			},
	    },
        handler: async (request, h) => {

			if (request.auth.isAuthenticated) {
				request.cookieAuth.clear();

				return { success: true };
			}

			return { success: false };

        }
	});


	// etc...
	// await someAsyncMethods();
}

let plugin = {
	name: internals.pluginName,
	register,
	version: '0.0.1'
	// dependencies: ['xyz']
};

exports.plugin = plugin;
