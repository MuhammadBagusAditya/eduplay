import { fail, superValidate, withFiles } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { addFormSchema } from '$lib/schema/teachers/classes';
import { zod } from 'sveltekit-superforms/adapters';
import { pb } from '$lib/pb';

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(addFormSchema));

	return {
		form: withFiles(form)
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(addFormSchema));
		let message: AlertMessage;

		// error validation
		if (!form.valid) {
			return fail(400, {
				form: withFiles(form)
			});
		}

		try {
			// add new class
			await pb.collection('classes').create({
				...form.data,
				creator: event.locals.user?.id
			});

			message = {
				text: 'Kelas berhasil ditambahkan',
				variant: 'primary'
			};
		} catch (e) {
			// return error
			return fail(400, {
				form: withFiles(form),
				message: {
					text: 'Kelas gagal ditambahkan',
					variant: 'destructive'
				} satisfies AlertMessage
			});
		}

		return {
			form: withFiles(form),
			message
		};
	}
} satisfies Actions;
