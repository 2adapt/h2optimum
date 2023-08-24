import { redirect } from '@sveltejs/kit';
import { API_ORIGIN } from '$env/static/private';


export async function load(event) {
	let Cards;	
	
	let user = event.locals;
	let loggedUserID = user.auth.credentials.id;

	let searchParams = new URLSearchParams({
		user_id: loggedUserID
	});

	if(user.auth.credentials.is_admin){
		const res = await fetch(`${API_ORIGIN}/api/v2/installation`);
		Cards = await res.json();
	} else {
		const res = await fetch(`${API_ORIGIN}/api/v2/installation?${searchParams}`);
		Cards = await res.json();
	}


	return {
		Cards
	};
}

export const actions = {
	manageInstallation: async (event) => {
		const formData = await event.request.formData();
		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		};

		if(data.ID){
			const apiEdit = await fetch(`${API_ORIGIN}/api/v2/installation/` + data.ID, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'user_id': event.locals.auth.credentials.id,
					'soil_type_code': data.soilType,
					'name': data.name,
					'description': data.description,
					'location': {"lat": data.lat, "lon": data.lon},
					'active': true,
					'status': data.status
				})
			});

			if(apiEdit.ok){
				return { success: true };
			}

			return { success: false };

		} else {
			const apiCreate = await fetch(`${API_ORIGIN}/api/v2/installation`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'user_id': event.locals.auth.credentials.id,
					'soil_type_code': data.soilType,
					'name': data.name,
					'description': data.description,
					'location': {"lat": data.lat, "lon": data.lon},
					'active': true,
					'status': data.status
				})
			});

			if(apiCreate.ok){
				return { success: true };
			}

			return { success: false };
		}
	},

	deleteInstallation: async (event) => {
		const formData = await event.request.formData();
		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		};		

		const apiDelete = await fetch(`${API_ORIGIN}/api/v2/installation/` + data.ID, {
			method: 'DELETE'
		});

		if(apiDelete.ok){
			return { success: true };
		}
	}
};