import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { API_ORIGIN } from '$env/static/private';


export async function load(event) {
	let paramString = event.params.slug_id;
	let paramArray = paramString.split('-');
	let id = paramArray.pop();
	let user = event.locals;

	const res = await fetch(`${API_ORIGIN}/api/v2/installation/` + id);
	const installation = await res.json();

	if (!installation) {
		throw error(404, {
			message: 'Installation not found'
		});
	}

	let listDevices = installation.deviceList;


	listDevices.forEach((obj) => {
		obj.last_reading_formatted = new Date(obj.last_reading).toLocaleString();
	});

	return {
		installation,
		user,
		listDevices
	};
}