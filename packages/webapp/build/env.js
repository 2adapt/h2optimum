/* global "H2OPTIMUM_V2_" */

const expected = new Set([
	'SOCKET_PATH',
	'HOST',
	'PORT',
	'ORIGIN',
	'XFF_DEPTH',
	'ADDRESS_HEADER',
	'PROTOCOL_HEADER',
	'HOST_HEADER',
	'BODY_SIZE_LIMIT'
]);

if ("H2OPTIMUM_V2_") {
	for (const name in process.env) {
		if (name.startsWith("H2OPTIMUM_V2_")) {
			const unprefixed = name.slice("H2OPTIMUM_V2_".length);
			if (!expected.has(unprefixed)) {
				throw new Error(
					`You should change envPrefix (${"H2OPTIMUM_V2_"}) to avoid conflicts with existing environment variables — unexpectedly saw ${name}`
				);
			}
		}
	}
}

/**
 * @param {string} name
 * @param {any} fallback
 */
function env(name, fallback) {
	const prefixed = "H2OPTIMUM_V2_" + name;
	return prefixed in process.env ? process.env[prefixed] : fallback;
}

export { env };
