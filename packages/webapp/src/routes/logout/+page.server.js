import { redirect } from '@sveltejs/kit';
import setCookieParser from 'set-cookie-parser';
import { API_ORIGIN } from '$env/static/private';

export async function load(event) {
	const sidValue = event.cookies.get('sid');

	const res = await fetch(`${API_ORIGIN}/api/v2/auth/logout`, {
		method: 'POST',
		headers: {
			'cookie': 'sid=' + sidValue
		}
	});

	const auth = await res.json();
	var cookiesParsed = setCookieParser.parse(res);

	if (auth.success == true) {
		for (let cookieParsed of cookiesParsed) {
			const { name, value, ...options } = cookieParsed;

			event.cookies.set(name, value, options);
		}
		throw redirect(303, '/login');
	} else {
		throw redirect(303, '/login');
	}
}
