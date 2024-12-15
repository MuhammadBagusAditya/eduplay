import { fail, superValidate, withFiles } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { editFormSchema } from '$lib/schema/teachers/classes';
import { zod } from 'sveltekit-superforms/adapters';
import { pb } from '$lib/pb';
import type { RecordModel } from 'pocketbase';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	let classroom: RecordModel;
	try {
		classroom = await pb.collection('classes').getOne(params.id);
	} catch (e) {
		error(404);
	}

	const form = await superValidate(
		zod(editFormSchema, {
			defaults: {
				name: classroom.name,
				description: classroom.description,
				schedules: classroom.schedules
			}
		})
	);

	return {
		classroom,
		form: withFiles(form)
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(editFormSchema));
		let message: AlertMessage;

		// error validation
		if (!form.valid) {
			return fail(400, {
				form: withFiles(form)
			});
		}

		try {
			// edit class data
			if (form.data.thumbnail) {
				await pb.collection('classes').update(event.params.id, {
					...form.data
				});
			} else {
				await pb.collection('classes').update(event.params.id, {
					...form.data,
					thumbnail: undefined
				});
			}

			message = {
				text: 'Kelas berhasil diubah',
				variant: 'primary'
			};
		} catch (e) {
			// return error
			return fail(400, {
				form: withFiles(form),
				message: {
					text: 'Kelas gagal diubah',
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
