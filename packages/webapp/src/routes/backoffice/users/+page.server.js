import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { API_ORIGIN } from '$env/static/private';

export async function load(event) {

	let user = event.locals;
	let isAdmin = user.auth.credentials.is_admin;

	if (!isAdmin) {
		throw redirect(303, '/backoffice');
	}

	const res = await fetch(`${API_ORIGIN}/api/v2/user`);
	const users = await res.json();

	const res2 = await fetch(`${API_ORIGIN}/api/v2/installation`);
	const installations = await res2.json();

	return {
        users,
		installations
	};
}

export const actions = {
	manageUser: async (event) => {
		const formData = await event.request.formData();
		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		};
		console.log(formData.getAll('installationList'));

		if(data.ID){
			//EDIT
			const apiEdit = await fetch(`${API_ORIGIN}/api/v2/user/` + data.ID, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
                    'email': data.email,
                    'first_name': data.firstname,
                    'last_name': data.lastname,
					'installationList': formData.getAll('installationList')
				})
			});


			if(apiEdit.ok){
				return { success: true };
			}

			return { success: false };

		} else {
			//CREATE
			const apiCreate = await fetch(`${API_ORIGIN}/api/v2/user`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'email': data.email,
                    'first_name': data.firstname,
                    'last_name': data.lastname,
					'active': true,
					'installationList': formData.getAll('installationList')
				})
			});
			let info = await apiCreate.json();
			console.log(info);


			if(apiCreate.ok){
				return { success: true };
			}

			return { success: false };
		}

		return { success: true };
	},

	deleteUser: async (event) => {
		const formData = await event.request.formData();
		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		};		

		const apiDelete = await fetch(`${API_ORIGIN}/api/v2/user/` + data.ID, {
			method: 'DELETE'
		});

		if(apiDelete.ok){
			return { success: true };
		}
	}
};
