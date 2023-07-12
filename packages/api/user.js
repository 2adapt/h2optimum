'use strict';

let Path = require('path');
let Boom = require('@hapi/boom');
let Joi = require('joi');
let { sql } = require('./sql.js');
let User = require('./models/User.js')
let Installation = require('./models/Installation.js')

let internals = {
	pluginName: Path.parse(__filename).name
};

function register(server, options) {

	console.log(`register ${internals.pluginName}`)
	console.log({ options });

	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/user \
--request GET \
--include \
--insecure \
--cookie cookies-from-curl.txt

	*/

	server.route({
		method: 'GET',
		path: '/api/v2/user',
		options: {
			cors: {
			    origin: ['*']
			},
		},
		handler: async function (request, h) {
			
			console.log({ 
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
			
			console.log({ 
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
				        installationList(defaultSelect)
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
--data '{"email":"walter5@xyz.com",    "first_name":"walter first",    "last_name":"walter last"}'
		        	
	*/

	server.route({
	    method: 'post',
	    path: '/api/v2/user',
	    options: {
	    	cors: {
	    	    origin: ['*']
	    	},
	    	validate: {
	    		payload: Joi.object({
	    		    email: Joi.string().max(100).required(),
	    		    first_name: Joi.string().max(100).required(),
	    		    last_name: Joi.string().max(100).required(),
	    		}),
	    	    // failAction: 'ignore'
	    	    failAction: (request, h, err) => { throw err; }
	    	}
	    },
	    handler: async function (request, h) {

	    	console.log({ 
	    		'request.params': request.params,
	    		'request.query': request.query,
	    		'request.payload': request.payload
	    	});

	        let result;

	        try {

            	let {
            	    email,
            	    first_name,
            	    last_name,
            	} = request.payload;

                result = await sql`

                    insert into "t_users"(
                        email, 
                        first_name,
                        last_name,
                        pw_hash
                    )
                    values (
                        ${email}, 
                        ${first_name},
                        ${last_name},
                        'xxx'
                    )
                    returning *

                `;

	        }
	        catch(err) {
	            return Boom.badRequest(err);
	        }

	        return result[0];

	    }
	});

	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/user/18 \
--request PATCH \
--include \
--insecure \
--cookie cookies-from-curl.txt \
--header "content-type: application/json" \
--data '{"email":"walter38@xyz.com-update",    "first_name":"walter first update",    "last_name":"walter last update"}'
		        	
	*/

	server.route({
	    method: 'patch',
	    path: '/api/v2/user/{user_id}',
	    options: {
	    	cors: {
	    	    origin: ['*']
	    	},
	    	validate: {
	    		params: Joi.object({
	    			user_id: Joi.number().integer().positive().required(),
	    		}),
	    		payload: Joi.object({
	    		    email: Joi.string().max(100).required(),
	    		    first_name: Joi.string().max(100).required(),
	    		    last_name: Joi.string().max(100).required(),
	    		}),
	    	    // failAction: 'ignore'
	    	    failAction: (request, h, err) => { throw err; }
	    	}
	    },
	    handler: async function (request, h) {

	    	console.log({ 
	    		'request.params': request.params,
	    		'request.query': request.query,
	    		'request.payload': request.payload
	    	});

	        let result;

	        try {

            	let {
            	    email,
            	    first_name,
            	    last_name,
            	} = request.payload;

                result = await sql`

                    update "t_users"
                    set 
                        email = ${email}, 
                        first_name = ${first_name}, 
                        last_name = ${last_name}
                        --updated_at = now()
                    where id = ${request.params.user_id}
                    returning *

                `;

	        }
	        catch(err) {
	            return Boom.badRequest(err);
	        }

	        return result[0];

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

			return { sucess: false }
			
			console.log({ 
				'request.params': request.params,
				'request.query': request.query,
			});

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
