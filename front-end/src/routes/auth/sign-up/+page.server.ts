import type { PageServerLoad, Actions } from './$types';
import { superValidate, type SuperValidated } from 'sveltekit-superforms';
import { signUpFormSchema as formSchema } from '$lib/schema/auth';
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

		// check user
		try {
			await pb
				.collection('users')
				.getFirstListItem(`username="${form.data.username}" || email="${form.data.email}"`);

			// if user existed, return some error messages
			return fail<{
				message: {
					text: string;
					variant: 'primary' | 'destructive';
				};
				form: typeof form;
			}>(409, {
				message: {
					text: 'User sudah ada',
					variant: 'destructive'
				},
				form
			});
		} catch (e) {
			// if not existed yet, create new user
			await pb.collection('users').create({
				username: form.data.username,
				email: form.data.email,
				password: form.data.password,
				passwordConfirm: form.data.confirmPassword,
				emailVisibility: true,

				name: form.data.username,
				bio: 'Senang bertemu dengan anda',
				role: 'student'
			});
		}

		// auth user
		await pb.collection('users').authWithPassword(form.data.email, form.data.password);

		// redirect to /dashboard
		redirect(302, '/dashboard');
	}
} satisfies Actions;
