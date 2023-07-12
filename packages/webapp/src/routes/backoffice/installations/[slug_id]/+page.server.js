import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { API_ORIGIN } from '$env/static/private';

export async function load(event) {

	let paramString = event.params.slug_id;
	let user = event.locals;
	//let loggedUserID = user.userId;
	let loggedUserID = 1;

	let paramArray = paramString.split('-');
	let id = paramArray.pop();

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

	if (installation.userId != loggedUserID) {
		//throw redirect(303, '/public/' + paramString);
	}



	return {
		installation,
		user,
		listDevices
	};
}

export const actions = {
	createDevice: async (event) => {
		const formData = await event.request.formData();
		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
			console.log(value);
		};

		//API create new device

		return { success: true };
	}
};
