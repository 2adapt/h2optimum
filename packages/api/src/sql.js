let { createConnection } = require('postgres-connection');
let application_name = (process.env.PGAPPNAME == null ? 'postgres.js' : process.env.PGAPPNAME + '-api');

let sql = createConnection({
	connection: {
	    application_name
	}
});

module.exports.sql = sql;
