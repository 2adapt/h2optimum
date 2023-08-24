import { redirect } from '@sveltejs/kit';
import setCookieParser from 'set-cookie-parser';
import { fail } from '@sveltejs/kit';
import { API_ORIGIN } from '$env/static/private';

export const actions = {
	default: async ({ request, cookies, fetch }) => {
		const form = await request.formData();
		const username = form.get('email');
		const password = form.get('password');
		const userData = { username, password };

		//console.log({ userData })

		// const username = 'user-a@2adapt.pt';
		// const password = 'pass-a';
		// const userData = { 'username': username, 'password': password };



		if (!username) {
			return fail(400, { username, missing: true });
		}
		
		const apiRes = await fetch(`${API_ORIGIN}/api/v2/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		});

		const apiData = await apiRes.json();

		//console.log({ apiData })

		if (apiData.success == true) {
			var setCookiesList = setCookieParser.parse(apiRes);
			console.log({ setCookiesList })

			for (let cookieParsed of setCookiesList) {
				const { name, value, ...options } = cookieParsed;

				cookies.set(name, value, options);
			}
			throw redirect(303, '/backoffice/installations');
		} else {
			//throw redirect(303, '/login');
			return fail(400, { username, email: username, incorrect: true });
		}
	}
};

export async function load(event) {

	if (event.locals.auth && event.locals.auth.isAuthenticated == true) {
		throw redirect(303, '/backoffice/installations');
	}
}
