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

curl ${API_ORIGIN}/api/v2/installation \
--request GET \
--include \
--insecure \
--cookie cookies-from-curl.txt

	*/

	server.route({
		method: 'GET',
		path: '/api/v2/installation',
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
			
			console.log({ 
				'request.params': request.params,
				'request.query': request.query,
				'request.payload': request.payload
			});

			let result;

			try {

				let query;

				query = Installation
				    .query()
				    .modify('defaultSelect')
				    .withGraphFetched(`
				    [
				        owner(defaultSelect),
				        deviceList(defaultSelect),
				        soilType(defaultSelect)
				    ]
				    `);

			    if (request.query.user_id != null) {
			    	query.where('user_id', request.query.user_id);
			    }

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

curl ${API_ORIGIN}/api/v2/installation/16 \
--request GET \
--include \
--insecure \
--cookie cookies-from-curl.txt

	*/

	server.route({
		method: 'GET',
		path: '/api/v2/installation/{installation_id}',
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
					installation_id: Joi.number().integer().positive().required(),
				}),
			    // failAction: 'ignore'
			    failAction: (request, h, err) => { logError(err); throw err; }
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

				query = Installation
				    .query()
				    .modify('defaultSelect')
				    .withGraphFetched(`
				    [
				        owner(defaultSelect),
				        deviceList(defaultSelect),
				        soilType(defaultSelect)
				    ]
				    `)
				    .whereRaw(`id = ${request.params.installation_id}`)
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

curl ${API_ORIGIN}/api/v2/installation \
--request POST \
--insecure \
--include \
--cookie cookies-from-curl.txt \
--header "content-type: application/json" \
--data '{"user_id":2,    "soil_type_code":"loamy_sand",    "name":"new installation name",    "description":"new installation desc",    "location":{"lat":123, "lon":456},    "active":true}'
		    



	*/

	server.route({
	    method: 'post',
	    path: '/api/v2/installation',
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
	    		    user_id: Joi.number().integer().positive().required(),
	    		    soil_type_code: Joi.string().valid('loamy_sand','fine_sandy_loam','sandy_loam','loam','clay').required(),
	    		    // crop_type_code: Joi.string().valid('crop_corn', 'crop_fruits', 'crop_wheat', 'crop_grapes'),
	    		    name: Joi.string().max(100).required(),
	    		    description: Joi.string().max(500).required(),
	    		    location: Joi.object({
	    		    	lat: Joi.number().required(),
	    		    	lon: Joi.number().required(),
	    		    }).required(),
	    		    active: Joi.bool().required(),
	    		    status: Joi.string().valid('active', 'archived').required()
	    		}),
	    	    // failAction: 'ignore'
	    	    failAction: (request, h, err) => { logError(err); throw err; }
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

            	// let {
            	// 	user_id,
            	// 	soil_type_code,
            	// 	// crop_type_code,
            	// 	name,
            	// 	description,
            	// 	location,
            	// 	active,
            	// } = request.payload;

             //    result = await sql`

             //        insert into t_installations(
	            //         user_id,
	            //         soil_type_code,
	            //         name,
	            //         slug,
	            //         description,
	            //         location,
	            //         active
             //        )
             //        values (
	            //         ${user_id},
	            //         ${soil_type_code},
	            //         ${name},
	            //         slugify(${name}),
	            //         ${description},
	            //         ${location},
	            //         ${active}
             //        )
             //        returning *

             //    `;


	             let payloadKeys = Object.keys(request.payload);

	             if (payloadKeys.length === 0) {
	             	throw new Error('missing data for insert')
	             }

             	// slug is an obsolete field from v1; when the v1 if offline this can be erased (and the slug column can be deleted)

             	if (request.payload.slug == null || request.payload.slug == '') {
             		request.payload.slug = (await sql`select slugify(${request.payload.name}) as slug`)[0]['slug'];

             		// add a timestamp to make sure it is unique

             		request.payload.slug += '-' + Date.now()
             	}

                result = await sql`

                    insert into t_installations
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


	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/installation/18 \
--request PATCH \
--insecure \
--include \
--cookie cookies-from-curl.txt \
--header "content-type: application/json" \
--data '{"user_id":2,    "soil_type_code":"loamy_sand",    "name":"new installation name",    "description":"new installation desc",    "location":{"lat":123, "lon":456},    "active":true}'

		    

	*/

	server.route({
	    method: 'patch',
	    path: '/api/v2/installation/{installation_id}',
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
	    			installation_id: Joi.number().integer().positive().required(),
	    		}),
	    		payload: Joi.object({
	    		    user_id: Joi.number().integer().positive(),
	    		    soil_type_code: Joi.string().valid('loamy_sand','fine_sandy_loam','sandy_loam','loam','clay'),
	    		    // crop_type_code: Joi.string().valid('crop_corn', 'crop_fruits', 'crop_wheat', 'crop_grapes'),
	    		    name: Joi.string().max(100),
	    		    description: Joi.string().max(500),
	    		    location: Joi.object({
	    		    	lat: Joi.number().required(),
	    		    	lon: Joi.number().required(),
	    		    }),
	    		    active: Joi.bool(),
	    		    status: Joi.string().valid('active', 'archived').required()
	    		}),
	    	    // failAction: 'ignore'
	    	    failAction: (request, h, err) => { logError(err); throw err; }
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

            	// let {
            	// 	user_id,
            	// 	soil_type_code,
            	// 	// crop_type_code,
            	// 	name,
            	// 	description,
            	// 	location,
            	// 	active,
            	// } = request.payload;

            	// result = await sql`

            	//     update t_installations
            	//     set 
	            // 	    soil_type_code = ${soil_type_code},
	            // 	    name = ${name},
	            // 	    description = ${description},
	            // 	    location = ${location},
	            // 	    active = ${active}
            	//     where id = ${request.params.installation_id}
            	//     returning *

            	// `;

            	let payloadKeys = Object.keys(request.payload);

            	if (payloadKeys.length === 0) {
            		throw new Error('missing data for update')
            	}

            	result = await sql`

            	    update t_installations
            	    set 
            	    	${sql(request.payload, payloadKeys)}
            	    where id = ${request.params.installation_id}
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

curl ${API_ORIGIN}/api/v2/installation/18 \
--request DELETE \
--insecure \
--cookie cookies-from-curl.txt

	*/

	server.route({
		method: 'delete',
		path: '/api/v2/installation/{installation_id}',
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
					installation_id: Joi.number().integer().min(0).required(),
				}),
			    // failAction: 'ignore'
			    failAction: (request, h, err) => { logError(err); throw err; }
			}
		},
		handler: async function (request, h) {

			// return { sucess: false }
			return Boom.badRequest(new Error('to be implemented'));
			console.log({ 
				'request.params': request.params,
				'request.query': request.query,
			});

		    let result;

		    try {
		        result = await sql`

		            delete from t_installations
		            where id = ${request.params.installation_id}
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
