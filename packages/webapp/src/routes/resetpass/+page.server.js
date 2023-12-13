import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import { API_ORIGIN } from '$env/static/private';


export async function load({ locals }) {

    // if there is already a session, there's nothing to do here

    if (locals.session != null) {
        throw redirect(303, '/backoffice');
    }

}


export const actions = {
	default: async ({ request, cookies, fetch }) => {
		const form = await request.formData();
		const email = form.get('email');

		if (!email) {
			return fail(400, { email, missingEmail: true });
		}

        try {
            let res = await fetch(API_ORIGIN + `/api/v3/password-reset/token`, {
                method: 'POST',
                body: { "email": email }
            });

            let resData = await res.json();
            console.log({resData});

            if (resData.success == true) {
                return { success: true };
            }

            if (resData.message == 'invalid-email') {
                return fail(400, { invalidEmail: true });
            }

            if (resData.message == '"email" must be a valid email') { 
                return fail(400, { invalidEmailFormat: true }
            );
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

