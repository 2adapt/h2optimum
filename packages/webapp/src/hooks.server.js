import { redirectIfNotAuth } from '$lib/utils';
import { API_ORIGIN } from '$env/static/private';

export async function handle({ event, resolve }) {
	const sidValue = event.cookies.get('sid');

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

	console.log('Antes');	
	console.log(event.route);

	if(event.route.id && event.route.id.startsWith('/backoffice')){
		redirectIfNotAuth(event);
	}
	console.log('Depois');


	return await resolve(event);
}
