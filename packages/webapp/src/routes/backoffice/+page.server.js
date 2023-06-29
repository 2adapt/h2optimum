import { redirect } from '@sveltejs/kit';

export async function load(event) {
	throw redirect(303, '/backoffice/installations');
}