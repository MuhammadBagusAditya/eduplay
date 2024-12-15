import type { PageServerLoad, Actions } from './$types';
import { superValidate, type SuperValidated } from 'sveltekit-superforms';
import { signInFormSchema as formSchema } from '$lib/schema/auth';
import { zod } from 'sveltekit-superforms/adapters';
import { pb } from '$lib/pb';
import { fail, redirect } from '@sveltejs/kit';

// Load data from server
export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));

		// auth algorithm
		try {
			// auth user with email and password
			await pb.collection('users').authWithPassword(form.data.email, form.data.password);
		} catch (e) {
			// if failed, return some error messages
			return fail<{
				message: {
					text: string;
					variant: 'primary' | 'destructive';
				};
				form: typeof form;
			}>(400, {
				message: {
					text: 'Login gagal',
					variant: 'destructive'
				},
				form
			});
		}

		// if success, redirect to /dashboard
		return redirect(302, '/dashboard');
	}
} satisfies Actions;
