
function _log (level, msg = '', data = {}) {

	if (_log.server == null) {
		console.log('server is not configured in the logger wrapper')
		return;
	}

	if (typeof msg === 'object') {
		data = msg;
	}
	else {
		data.msg = msg;
	}

	_log.server.log([level], data);
}

function logConfigure (options = {}) {

	if (options.server != null) {
		if (_log.server != null) {
			let err = new Error('server is already registered to the logger');
			console.log(err.message);
			throw err;
		}

		_log.server = options.server;		
	}
}

function logInfo (msg = '', data = {}) {

	_log('info', msg, data)
}

logInfo.configure = logConfigure;

function logError (msg = '', data = {}) {

	_log('error', msg, data)
}

logError.configure = logConfigure;

module.exports.logInfo = module.exports.log = logInfo;
module.exports.logError = logError;
