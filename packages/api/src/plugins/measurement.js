'use strict';

let Path = require('path');
let Boom = require('@hapi/boom');
let Joi = require('joi');
let User = require('../objection-models/User.js')
let Device = require('../objection-models/Device.js')
let { sql } = require('../sql.js');
let { log, logError } = require('../log.js');

let internals = {
	pluginName: Path.parse(__filename).name
};

function register(server, options) {

	log(`register plugin: ${internals.pluginName}`, { options })

	/*

# API_ORIGIN is defined in config/env.sh

curl ${API_ORIGIN}/api/v2/measurement \
--request GET \
--include \
--insecure \
--cookie cookies-from-curl.txt

	*/

	let notes, description;
	let tags = ['api', 'measurement'];

	description = 'Get list of measurements';
	notes = `


The query string should have either \`hours=24\` or the pair \`from_date=2023-01-01&to_date=2023-01-02\`.

Examples: 

\`\`\`

curl ${process.env.API_ORIGIN}/api/v2/measurement?device_mac=00-00-00-00-00-00&installation_id=123&from_date=2023-01-01&&to_date=2023-01-05 \
--request GET \
--cookie cookies.txt

\`\`\`

\`\`\`

curl ${process.env.API_ORIGIN}/api/v2/measurement?device_mac=00-00-00-00-00-00&installation_id=123&from_date=2023-01-01&&to_date=2023-01-05&limit=5000 \
--request GET \
--cookie cookies.txt

\`\`\`

\`\`\`

curl ${process.env.API_ORIGIN}/api/v2/measurement?device_mac=00-00-00-00-00-00&installation_id=123&hours=6 \
--request GET \
--cookie cookies.txt

\`\`\`


The file \`cookies.txt\` (the "cookie jar") should contain the session data in a cookie named \`sid\`.

	`;

	server.route({
		method: 'GET',
		path: '/api/v2/measurement',
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
					device_mac: Joi.string().required(),
					installation_id: Joi.number().integer().required(),

					// the query string should have either hours or the pair (from_date, to_date)

					from_date: Joi.date().iso(),
					to_date: Joi.date().iso(),
				    hours: Joi.number().integer(),

				    sort: Joi.string().valid('asc', 'desc').default('asc'),
				    limit: Joi.number().positive().default(1000)
				}),
				failAction: (request, h, err) => { logError(err); throw err; }
			},
			response: {
				schema: Joi.array().items(
					Joi.object({
						ts: Joi.date().iso(),
						device_id: Joi.string(),
						sid: Joi.number().integer(),
						type: Joi.string().valid('b', 't', 'tar', 'h').allow(null),
						val: Joi.number(),
						description: Joi.string().allow(''),
						version: Joi.number().integer().allow(null),
						installation_id: Joi.number().integer(),
					})
				),
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
		handler: async function (request, h) {
			
			console.log({ 
				'request.query': request.query,
			});

			let result;

			// if else

			try {

				let hoursIsAvailable = request.query.hours != null;
				let fromDateIsAvailable = request.query.from_date != null;
				let toDateIsAvailable = request.query.to_date != null;

				/*

				consider the possible combinations of hours, from_date and to_date

				we have the following 8 cases

				  | hours | from_date | to_date |
				---------------------------------
				1 | t     | t         | t       |
				2 | t     | t         | f       |
				---------------------------------
				3 | t     | f         | t       |
				4 | t     | f         | f       |  <- we want this
				---------------------------------
				5 | f     | t         | t       |  <- or this
				6 | f     | t         | f       |
				---------------------------------
				7 | f     | f         | t       |
				8 | f     | f         | f       |
				---------------------------------

				the valid cases are only 4 and 5; all the other cases should be considered invalid

				*/

				let case4 = hoursIsAvailable && !fromDateIsAvailable && !toDateIsAvailable;
				let case5 = !hoursIsAvailable && fromDateIsAvailable && toDateIsAvailable;

				let orderBy = (request.query.sort === 'asc') ? sql`order by ts asc` : sql`order by ts desc`;

				if (case4) {

					result = await sql`

					    select *
					    from t_measurements
					    where true
					    	and device_id = ${request.query.device_mac}
					    	and installation_id = ${request.query.installation_id}
					    	and ts >= now() - ${request.query.hours + ' hours'}::interval
					    	and ts <= now()
				    	${orderBy}
				    	${sql`limit ${request.query.limit}`}

					`;
				}
				else if (case5) {

					result = await sql`

					    select *
					    from t_measurements
					    where true
					    	and device_id = ${request.query.device_mac}
					    	and installation_id = ${request.query.installation_id}
					    	and ts >= ${request.query.from_date}
					    	and ts <= ${request.query.to_date}
				    	${orderBy}
				    	${sql`limit ${request.query.limit}`}

					`;	
				}
				else {
					throw new Error('the period for the data must be given in the query string using either "hours=24" or "from_date=2000-01-01T00:00&to_date=2000-01-01T00:00"')
				}


				// result = { now: Date.now() }
				// let query;

				// query = Device
				//     .query()
				//     .modify('defaultSelect')
				//     .withGraphFetched(`
				//     [
				//         owner(defaultSelect)
				//     ]
				//     `);

			 //    query.debug();

			 //    result = await query;
			}
			catch(err) {
				console.log(err)
				return Boom.badRequest(err);
			}

			return result;
		}
	});


}

let plugin = {
	name: internals.pluginName,
	register,
	version: '0.0.1'
	// dependencies: ['xyz']
};

exports.plugin = plugin;
