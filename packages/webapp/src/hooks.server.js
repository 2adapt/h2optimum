import { redirectIfNotAuth } from '$lib/utils';
import { API_ORIGIN } from '$env/static/private';
import { redirect } from '@sveltejs/kit';


export async function handle({ event, resolve }) {	

	const sidValue = event.cookies.get('sid');

	//console.log(sidValue);

	if((!sidValue || sidValue == undefined) && event.route.id && event.route.id.startsWith('/backoffice')){
		throw redirect(303, '/login');
	}

	//console.log({ sidValue })

	const apiRes = await fetch(`${API_ORIGIN}/api/v2/auth/who`, {
		method: 'GET',
		headers: {
			'cookie': 'sid=' + sidValue
		}
	});

	const apiData = await apiRes.json();
	//console.log({ apiData })
	event.locals.auth = apiData;

	if (event.route && event.route.id && event.route.id.startsWith('/backoffice')) {
		redirectIfNotAuth(event);
	}

	return await resolve(event);
}
