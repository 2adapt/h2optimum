'use strict';

let Path = require('path');
let Boom = require('@hapi/boom');
let Joi = require('joi');
let User = require('../objection-models/User.js')
let Installation = require('../objection-models/Installation.js')
let { sql } = require('../sql.js');
let { log, logError } = require('../log.js');

let internals = {
	pluginName: Path.parse(__filename).name
};

function register(server, options) {

	log(`register plugin: ${internals.pluginName}`, { options })

	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/user \
--request GET \
--include \
--insecure \
--cookie cookies-from-curl.txt

	*/

	let notes, description;
	let tags = ['api', 'user'];

	server.route({
		method: 'GET',
		path: '/api/v2/user',
		options: {
			auth: {
			    mode: 'try',
			    strategy: 'session',
			},
			cors: {
			    origin: ['*']
			},
		},
		handler: async function (request, h) {
			
			log({ 
				'request.params': request.params,
				'request.query': request.query,
				'request.payload': request.payload
			});

			if (request.auth.isAuthenticated) {
				// ...
			}

			let result;

			try {

				let query;

				query = User
				    .query()
				    .modify('defaultSelect')
				    .withGraphFetched(`
				    [
				        installationList(defaultSelect)
				    ]
				    `);

			    query.debug();

			    result = await query;
			}
			catch(err) {
				return Boom.badRequest(err);
			}

			return result;
		}
	});

	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/user/3 \
--request GET \
--include \
--insecure \
--cookie cookies-from-curl.txt

	*/

	server.route({
		method: 'GET',
		path: '/api/v2/user/{user_id}',
		options: {
			auth: {
			    mode: 'try',
			    strategy: 'session',
			},
			cors: {
			    origin: ['*']
			},
			validate: {
				params: Joi.object({
					user_id: Joi.number().integer().positive().required(),
				}),
			    // failAction: 'ignore'
			    failAction: (request, h, err) => { throw err; }
			}
		},
		handler: async function (request, h) {
			
			log({ 
				'request.params': request.params,
				'request.query': request.query,
				'request.payload': request.payload
			});

			let result;

			try {

				let query;

				query = User
				    .query()
				    .modify('defaultSelect')
				    .withGraphFetched(`
				    [
				        installationList(defaultSelect).
				        [
				        	device_type(defaultSelect)
				        ]
				    ]
				    `)
				    .whereRaw(`id = ${request.params.user_id}`)
				    .throwIfNotFound()

			    query.debug();

			    result = await query;

			}
			catch(err) {
			  return Boom.badRequest(err);
			}

			return result[0];
		}
	});

	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/user \
--request POST \
--insecure \
--include \
--cookie cookies-from-curl.txt \
--header "content-type: application/json" \
--data '{"email":"abc@xyz.com",    "first_name":"first name",    "last_name":"last name",    "active":true,    "is_admin":false}'
		        	
	*/

	server.route({
	    method: 'post',
	    path: '/api/v2/user',
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
	    		    email: Joi.string().email().required(),
	    		    first_name: Joi.string().max(100).required(),
	    		    last_name: Joi.string().max(100).required(),
	    		    active: Joi.bool().required(),
	    		    installationList: Joi.number().integer().required(),
	    		    // is_admin: Joi.bool().required(),
	    		}),
	    	    // failAction: 'ignore'
	    	    failAction: (request, h, err) => { throw err; }
	    	}
	    },
	    handler: async function (request, h) {

	    	log({ 
	    		'request.params': request.params,
	    		'request.query': request.query,
	    		'request.payload': request.payload,
	    		'request.auth': request.auth,
	    	});

	    	// authentication must be required in this route

	    	//if (!request.auth.credentials.is_admin) {
	    	//	return Boom.unauthorized('you must be admin to access this route');
	    	//}

	        let result;

	        try {

            	// let {
            	//     email,
            	//     first_name,
            	//     last_name,
            	// } = request.payload;

             //    result = await sql`

             //        insert into "t_users"(
             //            email, 
             //            first_name,
             //            last_name,
             //            pw_hash
             //        )
             //        values (
             //            ${email}, 
             //            ${first_name},
             //            ${last_name},
             //            'xxx'
             //        )
             //        returning *

             //    `;



				// TODO: check if is_active is true and the session user is not admin
	            // TODO: handle pw_hash
	            request.payload.pw_hash = request.payload.email;

				let payloadKeys = Object.keys(request.payload);

				if (payloadKeys.length === 0) {
					throw new Error('missing data for insert')
				}

				result = await sql`

				    insert into t_users
				    ${sql(request.payload, payloadKeys)}
				    returning *

				`;

	        }
	        catch(err) {
	            return Boom.badRequest(err);
	        }

	        return result[0];

	    }
	});




	//
	// ROUTE
	// 

	description = 'Update a user';
	notes = `

Examples: 

\`\`\`

curl ${process.env.API_ORIGIN}/api/v2/user/0  \\
--request PATCH  \\
--header "content-type: application/json"  \\
--data '{"email":"email@email.com",   "first_name":"first_name",   "last_name":"last_name",   "active":true,    "installationList":[1,2,3]}'  \\
--cookie cookies.txt

\`\`\`

\`installationList\` is a list with the ids of the installations associated to the user being updated.

NOTE: This route requires authentication. It's necessary to have the session cookie available in \`cookies.txt\`.

	`;

	server.route({
	    method: 'patch',
	    path: '/api/v2/user/{user_id}',
	    options: {
	    	auth: {
	    	    mode: 'try',
	    	    strategy: 'session',
	    	},
	    	cors: {
	    	    origin: ['*']
	    	},
	    	validate: {
	    		params: Joi.object({
	    			user_id: Joi.number().integer().positive().required(),
	    		}),
	    		payload: Joi.object({
	    		    email: Joi.string().email(),
	    		    first_name: Joi.string().max(100),
	    		    last_name: Joi.string().max(100),
	    		    active: Joi.bool(),
	    		    installationList: Joi.array().items(Joi.number().integer())
	    		    // is_admin: Joi.bool(),
	    		}),
	    	    // failAction: 'ignore'
	    	    failAction: (request, h, err) => { logError(err); throw err; }
	    	},
	    	response: {
	    		schema: Joi.object({
	    			id: Joi.number().integer(),
	    			email: Joi.string().email(),
	    			first_name: Joi.string().max(100),
	    			last_name: Joi.string().max(100),
	    			active: Joi.bool(),
	    			installationList: Joi.array().items(Joi.number().integer())
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
	    handler: async function (request, h) {

	    	log({ 
	    		'request.params': request.params,
	    		'request.query': request.query,
	    		'request.payload': request.payload,
	    		'request.auth': request.auth,
	    	});

	    	// authentication must be required in this route

	    	// if (!request.auth.credentials.is_admin) {
	    	// 	return Boom.unauthorized('you must be admin to access this route');
	    	// }

	        let updatedUser;

	        try {

                let { installationList } = request.payload;
                delete request.payload.installationList;

                let payloadKeys = Object.keys(request.payload);

                if (payloadKeys.length === 0) {
                	throw new Error('missing data for update')
                }

                // TODO: check if is_active is true and the session user is not admin


                updatedUser = await sql.begin(async function(sql) {
                	let result0 = await sql`

                	    update t_users
                	    set 
                	    	${sql(request.payload, payloadKeys)}
                	    where id = ${request.params.user_id}
                	    returning id,email,first_name,last_name,active

                	`;

                	let [user] = result0;
                	log(__filename, { user })

                	let result1 = await sql`

                	    update t_installations
                	    set 
                	    	user_id = null
                	    where user_id = ${request.params.user_id}
                	    returning id,user_id

                	`;
                	
                	log(__filename, { result1 })

                	let result2 = await sql`

                	    update t_installations
                	    set 
                	    	user_id = ${request.params.user_id}
                	    where id in ${sql(installationList)}
                	    returning id,user_id

                	`;

                	log(__filename, { result2 })

                	user.installationList = result2.map(o => o.id);

                	return user;
                });

	        }
	        catch(err) {
	        	logError(err);
	            return Boom.badRequest(err);
	        }

	        return updatedUser;

	    }
	});

	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/user/10 \
--request DELETE \
--insecure \
--cookie cookies-from-curl.txt

	*/

	server.route({
		method: 'delete',
		path: '/api/v2/user/{user_id}',
		options: {
			auth: {
			    mode: 'try',
			    strategy: 'session',
			},
			cors: {
			    origin: ['*']
			},
			validate: {
				params: Joi.object({
					user_id: Joi.number().integer().min(0).required(),
				}),
			    // failAction: 'ignore'
			    failAction: (request, h, err) => { throw err; }
			}
		},
		handler: async function (request, h) {


			// return { sucess: false }

			log({ 
				'request.params': request.params,
				'request.query': request.query,
				'request.auth': request.auth,
			});

			// authentication must be required in this route

			// if (!request.auth.credentials.is_admin) {
			// 	return Boom.unauthorized('you must be admin to access this route');
			// }

		    let result;

		    try {
		        result = await sql`

		            delete from "t_users"
		            where id = ${request.params.user_id}
		            returning id

		        `;
		    }
		    catch(err) {
		        return Boom.badRequest(err);
		    }

		    if (result.length === 0) {
		    	result.push({})
		    }

		    result[0].success = true;

		    return result[0];

		}
	})

}

let plugin = {
	name: internals.pluginName,
	register,
	version: '0.0.1'
	// dependencies: ['xyz']
};

exports.plugin = plugin;
