'use strict';

let Path = require('path');
let Boom = require('@hapi/boom');
let Joi = require('joi');
let { sql } = require('./sql.js');



let internals = {
	pluginName: Path.parse(__filename).name
};

function register(server, options) {

	console.log(`register ${internals.pluginName}`)
	console.log({ options });
	// console.log(`Path.parse(__dirname).name`, Path.parse(__dirname))
	// console.log(`Path.parse(__dirname).name`, Path.parse(__filename))


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
		    console.log('validate', { session })

		    // if (userObj == null) {
		    //     return { isValid: false };
		    // }

		    //return { isValid: true, credentials: userObj };
		    return { isValid: true };
		}
	});


	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/auth/who \
--request GET \
--include \
--insecure \
--cookie cookies-from-curl.txt

	*/

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
	        }
	    },
        handler: async (request, h) => {

            console.log('request.auth', request.auth);
            return {
				isAuthenticated: request.auth.isAuthenticated,
				credentials: request.auth.credentials,
				artifacts: request.auth.credentials,
				_NOTE: 'artifacts is deprecated'
            };
        }
	});

		server.route({
		    method: 'get',
		    path: '/api/v2/session',
		    options: {
		        auth: {
		            mode: 'try',
		            strategy: 'session',
		        },
		        cors: {
		            origin: ['*']
		        }
		    },
	        handler: async (request, h) => {

	            console.log('request.auth', request.auth);

	            let { isAuthenticated, credentials } = request.auth;

	            if (request.auth.isAuthenticated) {
	            	return { isAuthenticated }
	            }

	            return { isAuthenticated, credentials };
	        }
		});

	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/auth/login \
--request POST \
--include \
--insecure \
--cookie cookies-from-curl.txt \
--header "content-type: application/json" \
--data '{"username":"info@2adapt.pt", "password":"h2optimum"}' \
--cookie-jar cookies-from-curl.txt


	*/

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
			}
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
--cookie cookies-from-curl.txt \
--cookie-jar cookies-from-curl.txt

	*/

	server.route({
	    method: ['get', 'post'],
	    path: '/api/v2/auth/logout',
	    options: {
			auth: {
				mode: 'try',
				strategy: 'session',
			},
			cors: {
			    origin: ['*']
			}
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
