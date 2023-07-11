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

curl ${API_ORIGIN}/api/v2/installation \
--request GET \
--include \
--insecure

	*/

	server.route({
		method: 'GET',
		path: '/api/v2/installation',
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

				query = Installation
				    .query()
				    .modify('defaultSelect')
				    .withGraphFetched(`
				    [
				        owner(defaultSelect)
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

curl ${API_ORIGIN}/api/v2/installation/16 \
--request GET \
--include \
--insecure

	*/

	server.route({
		method: 'GET',
		path: '/api/v2/installation/{installation_id}',
		options: {
			cors: {
			    origin: ['*']
			},
			validate: {
				params: Joi.object({
					installation_id: Joi.number().integer().positive().required(),
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

				query = Installation
				    .query()
				    .modify('defaultSelect')
				    .withGraphFetched(`
				    [
				        owner(defaultSelect)
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
--header "content-type: application/json" \
--data '{"user_id":2,    "soil_type_code":"loamy_sand",    "name":"new installation",    "description":"new installation desc",    "location":{"lat":123, "lon":456},    "active":true}'
		    



	*/

	server.route({
	    method: 'post',
	    path: '/api/v2/installation',
	    options: {
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
	    		    active: Joi.bool().required()
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
            		user_id,
            		soil_type_code,
            		// crop_type_code,
            		name,
            		description,
            		location,
            		active,
            	} = request.payload;

                result = await sql`

                    insert into t_installations(
	                    user_id,
	                    soil_type_code,
	                    name,
	                    slug,
	                    description,
	                    location,
	                    active
                    )
                    values (
	                    ${user_id},
	                    ${soil_type_code},
	                    ${name},
	                    slugify(${name}),
	                    ${description},
	                    ${location},
	                    ${active}
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

curl ${API_ORIGIN}/api/v2/installation/18 \
--request PATCH \
--insecure \
--include \
--header "content-type: application/json" \
--data '{"user_id":2,    "soil_type_code":"loamy_sand",    "name":"new installation2",    "description":"new installation desc2",    "location":{"lat":123, "lon":456},    "active":true}'
		    

	*/

	server.route({
	    method: 'patch',
	    path: '/api/v2/installation/{installation_id}',
	    options: {
	    	cors: {
	    	    origin: ['*']
	    	},
	    	validate: {
	    		params: Joi.object({
	    			installation_id: Joi.number().integer().positive().required(),
	    		}),
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
	    		    active: Joi.bool().required()
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
            		user_id,
            		soil_type_code,
            		// crop_type_code,
            		name,
            		description,
            		location,
            		active,
            	} = request.payload;

            	result = await sql`

            	    update t_installations
            	    set 
	            	    user_id = ${user_id},
	            	    soil_type_code = ${soil_type_code},
	            	    name = ${name},
	            	    description = ${description},
	            	    location = ${location},
	            	    active = ${active}
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
--insecure

	*/

	server.route({
		method: 'delete',
		path: '/api/v2/installation/{installation_id}',
		options: {
			cors: {
			    origin: ['*']
			},
			validate: {
				params: Joi.object({
					installation_id: Joi.number().integer().min(0).required(),
				}),
			    // failAction: 'ignore'
			    failAction: (request, h, err) => { throw err; }
			}
		},
		handler: async function (request, h) {

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