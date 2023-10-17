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


	description = 'Get list of measurements (new version)';
	notes = `


The query string should have either \`hours=24\` or the pair \`from_date=2023-01-01&to_date=2023-01-02\`.

Examples: 

\`\`\`

curl ${process.env.API_ORIGIN}/api/v2/measurement?device_mac=00-00-00-00-00-00&installation_id=123&from_date=2023-01-01&&to_date=2023-01-05 \
--request GET \
--cookie cookies.txt

\`\`\`

\`\`\`

curl ${process.env.API_ORIGIN}/api/v2/measurement?device_mac=00-00-00-00-00-00&installation_id=123&from_date=2023-01-01&&to_date=2023-01-05&limit=5000&potential_threshold=600 \
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
		path: '/api/v2/measurement-new',
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
				    limit: Joi.number().positive().default(1000),

				    use_abs: Joi.bool().default(true),
				    potential_threshold: Joi.number().positive().default(1000),
				    time_bucket: Joi.number().positive().max(24).allow(null).default(null)
				}),
				failAction: (request, h, err) => { logError(err); throw err; }
			},
			response: {
				schema: Joi.array().items(
					Joi.object({
						ts: Joi.date().iso(),
						s1_raw: Joi.number().allow(null),
						s2_raw: Joi.number().allow(null),
						s3_raw: Joi.number().allow(null),
						t_raw: Joi.number().allow(null),
						tar_raw: Joi.number().allow(null),
						b_raw: Joi.number().allow(null),
						t: Joi.number().allow(null),
						tar: Joi.number().allow(null),
						b: Joi.number().allow(null),
						s1_potential: Joi.number().allow(null),
						s2_potential: Joi.number().allow(null),
						s3_potential: Joi.number().allow(null),
						t_used_in_potential: Joi.number()
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
			    'hapi-swagger': { order: 20 }
			},

		},
		handler: async function (request, h) {
			
			console.log({ 
				'request.query': request.query,
			});

			try {
				let result;
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
				let limit = sql`limit ${request.query.limit}`;
				let mainQuery;
				let defaultTemperature = 25.0;  // TODO: add to the query string?

				if (case4) {

					mainQuery = sql`

					select 
						*,
						resistance_to_potential(s1_raw, coalesce(t, tar, ${defaultTemperature}), ${request.query.potential_threshold}, ${request.query.use_abs}) as s1_potential,
						resistance_to_potential(s2_raw, coalesce(t, tar, ${defaultTemperature}), ${request.query.potential_threshold}, ${request.query.use_abs}) as s2_potential,
						resistance_to_potential(s3_raw, coalesce(t, tar, ${defaultTemperature}), ${request.query.potential_threshold}, ${request.query.use_abs}) as s3_potential,
						coalesce(t, tar, ${defaultTemperature}) as t_used_in_potential
					from (
						select
						    *,
						    (CASE WHEN t_raw > -50 and t_raw < 100 THEN t_raw ELSE NULL END) as t,
						    (CASE WHEN tar_raw > -50 and tar_raw < 100 THEN tar_raw ELSE NULL END) as tar,
						    (CASE WHEN b_raw >= 0 THEN b_raw ELSE NULL END) as b
						from (
						    select
						        ts,
						    	MAX(CASE WHEN sid = 2 THEN val ELSE NULL END) as s1_raw,
						        MAX(CASE WHEN sid = 3 THEN val ELSE NULL END) as s2_raw,
						        MAX(CASE WHEN sid = 4 THEN val ELSE NULL END) as s3_raw,
						        MAX(CASE WHEN sid = 1 THEN val ELSE NULL END) as t_raw,
						        MAX(CASE WHEN sid = 6 THEN val ELSE NULL END) as tar_raw,
						        MAX(CASE WHEN sid = 5 THEN val ELSE NULL END) as b_raw
						    from t_measurements
						    where true
						        and device_id = ${request.query.device_mac}
						        and installation_id = ${request.query.installation_id}
						        and ts >= now() - ${request.query.hours + ' hours'}::interval
						        and ts <= now()
						    group by ts
						    ${orderBy}
						    ${limit}
						) inner_query
					) inner_query_2

					`;
				}
				else if (case5) {

					mainQuery = sql`

					select 
						*,
						resistance_to_potential(s1_raw, coalesce(t, tar, ${defaultTemperature}), ${request.query.potential_threshold}, ${request.query.use_abs}) as s1_potential,
						resistance_to_potential(s2_raw, coalesce(t, tar, ${defaultTemperature}), ${request.query.potential_threshold}, ${request.query.use_abs}) as s2_potential,
						resistance_to_potential(s3_raw, coalesce(t, tar, ${defaultTemperature}), ${request.query.potential_threshold}, ${request.query.use_abs}) as s3_potential,
						coalesce(t, tar, ${defaultTemperature}) as t_used_in_potential
					from (
						select
						    *,
						    (CASE WHEN t_raw > -50 and t_raw < 100 THEN t_raw ELSE NULL END) as t,
						    (CASE WHEN tar_raw > -50 and tar_raw < 100 THEN tar_raw ELSE NULL END) as tar,
						    (CASE WHEN b_raw >= 0 THEN b_raw ELSE NULL END) as b
						from (
						    select
						        ts,
						    	MAX(CASE WHEN sid = 2 THEN val ELSE NULL END) as s1_raw,
						        MAX(CASE WHEN sid = 3 THEN val ELSE NULL END) as s2_raw,
						        MAX(CASE WHEN sid = 4 THEN val ELSE NULL END) as s3_raw,
						        MAX(CASE WHEN sid = 1 THEN val ELSE NULL END) as t_raw,
						        MAX(CASE WHEN sid = 6 THEN val ELSE NULL END) as tar_raw,
						        MAX(CASE WHEN sid = 5 THEN val ELSE NULL END) as b_raw
						    from t_measurements
						    where true
						        and device_id = ${request.query.device_mac}
						        and installation_id = ${request.query.installation_id}
						        and ts >= ${request.query.from_date}
						        and ts <= ${request.query.to_date}
						    group by ts
						    ${orderBy}
						    ${limit}
						) inner_query
					) inner_query_2


					`;	
				}
				else {
					throw new Error('the period for the data must be given in the query string using either "hours=24" or "from_date=2000-01-01T00:00&to_date=2000-01-01T00:00"')
				}

				if (request.query.time_bucket == null) {
					result = await mainQuery;
				}
				else {
					let orderByBucket = (request.query.sort === 'asc') ? sql`order by ts_bucket asc` : sql`order by ts_bucket desc`;

					// IMPORTANT: we have to ts_bucket here otherwise the queries will not compose well; this has to be corrected in js land afterwards

					let timeBucketQuery = sql`

					select 
						time_bucket(${request.query.time_bucket + ' hour'}::interval, ts) as ts_bucket,
						avg(s1_raw) as s1_raw,
						avg(s2_raw) as s2_raw,
						avg(s3_raw) as s3_raw,
						avg(t_raw) as t_raw,
						avg(tar_raw) as tar_raw,
						avg(b_raw) as b_raw,
						avg(t) as t,
						avg(tar) as tar,
						avg(b) as b,
						avg(s1_potential) as s1_potential,
						avg(s2_potential) as s2_potential,
						avg(s3_potential) as s3_potential,
						avg(t_used_in_potential) as t_used_in_potential

					from (

					${mainQuery}

					) inner_query_3
					group by ts_bucket
					${orderByBucket}

					`
					result = await timeBucketQuery;
				}

				// final adjustments; it's easier to do this in js land

			 	let potential_threshold = (request.query.use_abs ? request.query.potential_threshold : -1 * request.query.potential_threshold);

			 	for (let idx = 0; idx < result.length; idx++) {

			 		// 1 - if we are using ?time_bucket=..., the property for the api output must be 'ts' and not 'ts_bucket'

			 		if (request.query.time_bucket != null) {
			 			result[idx]['ts'] = result[idx]['ts_bucket'];
			 			delete result[idx]['ts_bucket'];
			 		}
			 		/*
			 		if (request.query.use_abs) {

			 			// 2 - apply absolute + potential_threshold; note that potential values are always negative (?);

			 			if (result[idx]['s1_potential'] != null) {
			 				result[idx]['s1_potential'] = Math.min(Math.abs(result[idx]['s1_potential']), potential_threshold);	
			 			}
			 			
			 			if (result[idx]['s2_potential'] != null) {
			 				result[idx]['s2_potential'] = Math.min(Math.abs(result[idx]['s2_potential']), potential_threshold);	
			 			}

			 			if (result[idx]['s3_potential'] != null) {
			 				result[idx]['s3_potential'] = Math.min(Math.abs(result[idx]['s3_potential']), potential_threshold);	
			 			}
			 		}
			 		else {

			 			// 3 - potential_threshold (which is negative in these branch, see above))
			 			// ; note that potential values are always negative (?);

			 			if (result[idx]['s1_potential'] != null) {
			 				result[idx]['s1_potential'] = Math.max(result[idx]['s1_potential'], potential_threshold);	
			 			}
			 			
			 			if (result[idx]['s2_potential'] != null) {
			 				result[idx]['s2_potential'] = Math.max(result[idx]['s2_potential'], potential_threshold);	
			 			}

			 			if (result[idx]['s3_potential'] != null) {
			 				result[idx]['s3_potential'] = Math.max(result[idx]['s3_potential'], potential_threshold);	
			 			}
			 		}
			 		*/
			 	}

				return result;
			}
			catch(err) {
				console.log(err)
				return Boom.badRequest(err);
			}

			
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
