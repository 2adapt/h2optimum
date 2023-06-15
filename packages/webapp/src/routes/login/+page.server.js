import { redirect } from '@sveltejs/kit';
import setCookieParser from 'set-cookie-parser';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		//const email = form.get('email');
		//const password = form.get('password');

		const username = 'user-a@2adapt.pt';
		const password = 'pass-a';
		//const userData = {"username":"user-a@2adapt.pt", "password":"pass-a"};
		const userData = { 'username': username, 'password': password };

		if (!username) {
			return fail(400, { username, missing: true });
		}

		const res = await fetch(`https://auth.e-risk.pt/api/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		});

		const auth = await res.json();
		var cookiesParsed = setCookieParser.parse(res);

		if (auth.success == true) {
			for (let cookieParsed of cookiesParsed) {
				const { name, value, ...options } = cookieParsed;

				cookies.set(name, value, options);
			}
			throw redirect(303, '/testecards');
		} else {
			//throw redirect(303, '/login');
			return fail(400, { email, incorrect: true });
		}
	}
};

export async function load(event) {
	if (event.locals.auth.isAuthenticated == true) {
		throw redirect(303, '/testecards');
	}
}
