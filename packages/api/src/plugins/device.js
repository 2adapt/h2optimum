'use strict';

let Path = require('path');
let Boom = require('@hapi/boom');
let Joi = require('joi');
let { sql } = require('./sql.js');
let User = require('./models/User.js')
let Device = require('./models/Device.js')
let { log, logError } = require('./utils.js');

let internals = {
	pluginName: Path.parse(__filename).name
};

function register(server, options) {

	log(`register plugin: ${internals.pluginName}`, { options })

	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/device \
--request GET \
--include \
--insecure \
--cookie cookies-from-curl.txt

	*/

	let notes, description;
	let tags = ['api', 'device'];

	description = 'Get list with devices';
	notes = `
This route requires authentication. It's necessary to have the session cookie available in \`cookies.txt\`.

Examples: 

\`\`\`

curl ${process.env.API_ORIGIN}/api/v2/device \\
--request GET \\
--include \\
--cookie cookies.txt

\`\`\`

\`\`\`

curl ${process.env.API_ORIGIN}/api/v2/device?sort=asc \\
--request GET \\
--include \\
--cookie cookies.txt

\`\`\`

	`;


	server.route({
		method: 'GET',
		path: '/api/v2/device',
		options: {
			auth: {
			    mode: 'try',
			    strategy: 'session',
			},
			cors: {
			    origin: ['*']
			},
			validate: {
				query: Joi.object({
					user_id: Joi.number().integer().description('If the user in the session is an admin, the list of devices can be filtered by user; if not, this query string param is invalid.'),
				    sort: Joi.string().valid('asc', 'desc').default('desc').description('Sort by created_at'),
				}),
				failAction: (request, h, err) => { logError(err); throw err; }
			},
			response: {
				schema: Joi.array().items(
					Joi.object({
						id: Joi.number().integer(),
						user_id: Joi.number().integer().positive(),
						installation_id: Joi.number().integer().allow(null),
						device_type_code: Joi.string().valid('device_sensor', 'device_switch', 'device_mixed'),
						battery_mode_code: Joi.string().valid('battery_normal','battery_eco','battery_standby'),
						mac: Joi.string().regex(/^([0-9a-f]{2}:){5}([0-9a-f]{2})$/i).lowercase().example('00:00:00:00:00:00'),
						activation_key: Joi.string().allow('').example('activation_key'),
						description: Joi.string().allow('').max(100).example('description'),
						last_reading: Joi.date().iso(),
						created_at: Joi.date().iso(),
						active: Joi.bool().required(),
						owner: Joi.object({
							id: Joi.number().integer(),
							email: Joi.string().allow('').example('email'),
							first_name: Joi.string().allow('').example('first_name'),
							last_name: Joi.string().allow('').example('last_name')
						}),
					})
				),
				failAction: (request, h, err) => { logError(err); throw err; }
				// failAction: 'log'
			},

			description,
			notes,
			tags,
			plugins: {
			    'hapi-swagger': {
			    	order: 0,
			        responses: {
			            // '400': {
			            //     'description': JSON.stringify({x:1, y:2}, null, 4)
			            // }
			        },
			    }
			},
		},
		handler: async function (request, h) {
			
			console.log({ 
				// 'request.params': request.params,
				'request.query': request.query,
				// 'request.payload': request.payload
			});

			let result;

			try {

				let query;

				query = Device
				    .query()
				    .modify('defaultSelect')
				    .withGraphFetched(`
				    [
				        owner(defaultSelect)
				    ]
				    `)
				    .orderBy('created_at', request.query.sort)

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

curl ${API_ORIGIN}/api/v2/device/16 \
--request GET \
--include \
--insecure \
--cookie cookies-from-curl.txt

	*/

	server.route({
		method: 'GET',
		path: '/api/v2/device/{device_id}',
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
					device_id: Joi.number().integer().positive().required(),
				}),
			    // failAction: 'ignore'
			    failAction: (request, h, err) => { logError(err); throw err; }
			},
			tags,
			plugins: {
			    'hapi-swagger': {
			    	order: 1,
			    }
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

				query = Device
				    .query()
				    .modify('defaultSelect')
				    .withGraphFetched(`
				    [
				        owner(defaultSelect)
				    ]
				    `)
				    .whereRaw(`id = ${request.params.device_id}`)
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

curl ${API_ORIGIN}/api/v2/device \
--request POST \
--include \
--insecure \
--cookie cookies-from-curl.txt \
--header "content-type: application/json" \
--data '{"user_id":2,    "installation_id":2,    "device_type_code":"device_sensor",    "battery_mode_code":"battery_normal",    "mac":"00-00-00-00-00-00",    "activation_key":"key",    "description":"new device desc",    "active":true}'

	*/


	server.route({
	    method: 'post',
	    path: '/api/v2/device',
	    options: {
	    	auth: {
	    	    mode: 'try',
	    	    strategy: 'session',
	    	},
	    	cors: {
	    	    origin: ['*']
	    	},
	    	plugins: {
	    	    'hapi-swagger': {
	    	    	order: 2
	    	    }
	    	},
	    	validate: {
	    		payload: Joi.object({
					user_id: Joi.number().integer().positive().required(),
					installation_id: Joi.number().integer().positive().required(),
					device_type_code: Joi.string().valid('device_sensor', 'device_switch', 'device_mixed').required(),
					battery_mode_code: Joi.string().valid('battery_normal','battery_eco','battery_standby').required(),
					mac: Joi.alternatives().try(
						Joi.string().regex(/^([0-9a-f]{2}:){5}([0-9a-f]{2})$/i).lowercase(),
						Joi.string().regex(/^([0-9a-f]{2}-){5}([0-9a-f]{2})$/i).lowercase()
					).required(),
					activation_key: Joi.string().max(100).required(),
					description: Joi.string().max(100).required(),
					active: Joi.bool().required()
				}).options({}), // allowUnknown: true
	    	    // failAction: 'ignore'
	    	    failAction: (request, h, err) => { logError(err); throw err; }
	    	},
	    	tags
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
            	// 	installation_id,
            	// 	device_type_code,
            	// 	battery_mode_code,
            	// 	mac,
            	// 	activation_key,
            	// 	description,
            	// 	active
            	// } = request.payload;

             //    result = await sql`

             //        insert into t_devices(
	            //         user_id,
	            //         installation_id,
	            //         device_type_code,
	            //         battery_mode_code,
	            //         mac,
	            //         activation_key,
	            //         description,
	            //         active
             //        )
             //        values (
	            //         ${user_id},
	            //         ${installation_id},
	            //         ${device_type_code},
	            //         ${battery_mode_code},
	            //         ${mac},
	            //         ${activation_key},
	            //         ${description},
	            //         ${active}
             //        )
             //        returning *

             //    `;

	             let payloadKeys = Object.keys(request.payload);

	             if (payloadKeys.length === 0) {
	             	throw new Error('missing data for insert')
	             }

                result = await sql`

                    insert into t_devices
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

curl ${API_ORIGIN}/api/v2/device/35 \
--request PATCH \
--include \
--insecure \
--cookie cookies-from-curl.txt \
--header "content-type: application/json" \
--data '{"user_id":2,    "installation_id":2,    "device_type_code":"device_sensor",    "battery_mode_code":"battery_normal",    "mac":"00-00-00-00-00-00",    "activation_key":"key",    "description":"new device desc",    "active":true}'

		    

	*/

	server.route({
	    method: 'patch',
	    path: '/api/v2/device/{device_id}',
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
	    			device_id: Joi.number().integer().positive().required(),
	    		}),
	    		payload: Joi.object({
					user_id: Joi.number().integer().positive(),
					installation_id: Joi.number().integer().positive(),
					device_type_code: Joi.string().valid('device_sensor', 'device_switch', 'device_mixed'),
					battery_mode_code: Joi.string().valid('battery_normal','battery_eco','battery_standby'),
					mac: Joi.alternatives().try(
						Joi.string().regex(/^([0-9a-f]{2}:){5}([0-9a-f]{2})$/i).lowercase(),
						Joi.string().regex(/^([0-9a-f]{2}-){5}([0-9a-f]{2})$/i).lowercase()
					),
					activation_key: Joi.string().max(100),
					description: Joi.string().max(100),
					//last_reading: Joi.date().iso(),
					active: Joi.bool()
				}).options({}), // allowUnknown: true
	    	    // failAction: 'ignore'
	    	    failAction: (request, h, err) => { logError(err); throw err; }
	    	},
	    	plugins: {
	    	    'hapi-swagger': {
	    	    	order: 3
	    	    }
	    	},
	    	tags
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
            	// 	installation_id,
            	// 	device_type_code,
            	// 	battery_mode_code,
            	// 	mac,
            	// 	activation_key,
            	// 	description,
            	// 	active
            	// } = request.payload;

            	// result = await sql`

            	//     update t_devices
            	//     set 
	            // 	    user_id = ${user_id},
	            // 	    installation_id = ${installation_id},
	            // 	    device_type_code = ${device_type_code},
	            // 	    battery_mode_code = ${battery_mode_code},
	            // 	    mac = ${mac},
	            // 	    activation_key = ${activation_key},
	            // 	    description = ${description},
	            // 	    active = ${active}
            	//     where id = ${request.params.device_id}
            	//     returning *

            	// `.describe();

            	let payloadKeys = Object.keys(request.payload);

            	if (payloadKeys.length === 0) {
            		throw new Error('missing data for update')
            	}

            	result = await sql`

            	    update t_devices
            	    set 
            	    	${sql(request.payload, payloadKeys)}
            	    where id = ${request.params.device_id}
            	    returning *

            	`;

            	// console.log(result)
            	// return {x:1}

	        }
	        catch(err) {
	        	console.log(err)
	            return Boom.badRequest(err);
	        }

	        return result[0];

	    }
	});


	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/device/18 \
--request DELETE \
--include \
--insecure \
--cookie cookies-from-curl.txt

	*/

	server.route({
		method: 'delete',
		path: '/api/v2/device/{device_id}',
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
					device_id: Joi.number().integer().min(0).required(),
				}),
			    // failAction: 'ignore'
			    failAction: (request, h, err) => { logError(err); throw err; }
			},
			plugins: {
			    'hapi-swagger': {
			    	order: 4
			    }
			},
			tags
		},
		handler: async function (request, h) {

			// return { sucess: false }

			console.log({ 
				'request.params': request.params,
			});

		    let result;

		    try {
		        result = await sql`

		            delete from t_devices
		            where id = ${request.params.device_id}
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
