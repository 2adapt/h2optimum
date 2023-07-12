'use strict';

let Path = require('path');
let Boom = require('@hapi/boom');
let Joi = require('joi');
let { sql } = require('./sql.js');
let User = require('./models/User.js')
let Device = require('./models/Device.js')

let internals = {
	pluginName: Path.parse(__filename).name
};

function register(server, options) {

	console.log(`register ${internals.pluginName}`)
	console.log({ options });

	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/device \
--request GET \
--include \
--insecure \
--cookie cookies-from-curl.txt

	*/

	server.route({
		method: 'GET',
		path: '/api/v2/device',
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

				query = Device
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
			cors: {
			    origin: ['*']
			},
			validate: {
				params: Joi.object({
					device_id: Joi.number().integer().positive().required(),
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
--data '{"user_id":2,    "installation_id":2,    "device_type_code":"device_sensor",    "battery_mode_code":"battery_normal",    "mac":"00-00-00-00-00-00",    "activation_key":"key",    "description":"desc",    "active":true}'

	*/

	let payloadSchema = Joi.object({
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
		//last_reading: Joi.date().iso(),
		active: Joi.bool().required()
	});
	// .options({ allowUnknown: true });

	server.route({
	    method: 'post',
	    path: '/api/v2/device',
	    options: {
	    	cors: {
	    	    origin: ['*']
	    	},
	    	validate: {
	    		payload: payloadSchema,
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
            		installation_id,
            		device_type_code,
            		battery_mode_code,
            		mac,
            		activation_key,
            		description,
            		active
            	} = request.payload;

                result = await sql`

                    insert into t_devices(
	                    user_id,
	                    installation_id,
	                    device_type_code,
	                    battery_mode_code,
	                    mac,
	                    activation_key,
	                    description,
	                    active
                    )
                    values (
	                    ${user_id},
	                    ${installation_id},
	                    ${device_type_code},
	                    ${battery_mode_code},
	                    ${mac},
	                    ${activation_key},
	                    ${description},
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

	// TODO
	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/device/35 \
--request PATCH \
--include \
--insecure \
--cookie cookies-from-curl.txt \
--header "content-type: application/json" \
--data '{"user_id":2,    "installation_id":2,    "device_type_code":"device_switchh",    "battery_mode_code":"battery_eco",    "mac":"00-00-00-00-00-99",    "activation_key":"key2",    "description":"desc2",    "active":false}'
		    

	*/

	server.route({
	    method: 'patch',
	    path: '/api/v2/device/{device_id}',
	    options: {
	    	cors: {
	    	    origin: ['*']
	    	},
	    	validate: {
	    		params: Joi.object({
	    			device_id: Joi.number().integer().positive().required(),
	    		}),
	    		payload: payloadSchema,
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
            		installation_id,
            		device_type_code,
            		battery_mode_code,
            		mac,
            		activation_key,
            		description,
            		active
            	} = request.payload;

            	result = await sql`

            	    update t_devices
            	    set 
	            	    user_id = ${user_id},
	            	    installation_id = ${installation_id},
	            	    device_type_code = ${device_type_code},
	            	    battery_mode_code = ${battery_mode_code},
	            	    mac = ${mac},
	            	    activation_key = ${activation_key},
	            	    description = ${description},
	            	    active = ${active}
            	    where id = ${request.params.device_id}
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
			cors: {
			    origin: ['*']
			},
			validate: {
				params: Joi.object({
					device_id: Joi.number().integer().min(0).required(),
				}),
			    // failAction: 'ignore'
			    failAction: (request, h, err) => { throw err; }
			}
		},
		handler: async function (request, h) {

			return { sucess: false }

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
