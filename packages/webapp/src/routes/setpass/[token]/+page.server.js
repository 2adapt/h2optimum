import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import { API_ORIGIN } from '$env/static/private';


export async function load({ locals, params }) {

    // if there is already a session, there's nothing to do here

    if (locals.session != null) {
        throw redirect(303, '/backoffice');
    }

    try {
		let searchParams = new URLSearchParams({
		});
		//let data = await fetch(API_ORIGIN + `/api/v3/password-reset/token/${params.token}`);
        let data = {success: true};
        console.log('Token:')
        console.log(data)
        console.log('-----------------')

		return data;
	}
	catch(err) {
		console.log({ err });
		console.log({ 'err.message': err.message });
		console.log({ 'err.payload': err.payload });
		throw err;
	}

    // else, let the /login page be loaded normally (so that the user can submit a username+pass)
}


export const actions = {
	default: async ({ request, params, fetch }) => {
		const form = await request.formData();
		const password = form.get('password');
        const password2 = form.get('password2');


		if (password != password2) {
			return fail(400, { password, matchPasswords: true });
		}

        try {
            let res = await fetch(API_ORIGIN + `/api/v3/password-reset/password`, {
                method: 'PATCH',
                body: {token: params.token, password }
            });

            let resData = await res.json();
                    console.log('Set password:')
                    console.log(resData)
                    console.log('-----------------')
            
            if (resData.success == true) {
                return { success: true };
            }

            if (resData.message == 'invalid-token') {
                return fail(400, { invalidToken: true });
            }
        } 

        catch (err) {
            console.log(err)
            return fail(422, {
                description: err.message,
                error: err.message
            })
        };

        //console.log('form /login; will redirect to ' + redirectTo)
	}
};

