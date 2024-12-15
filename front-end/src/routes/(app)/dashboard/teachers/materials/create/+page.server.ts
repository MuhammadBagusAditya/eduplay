import { fail, superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { addMaterialSchema } from '$lib/schema/teachers/materials';
import { zod } from 'sveltekit-superforms/adapters';
import { pb } from '$lib/pb';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url }) => {
	const { searchParams } = url;

	const classroomId = searchParams.get('classroom');

	if (!classroomId) error(400);

	const classroom = await pb.collection('classes').getOne(classroomId);

	const form = await superValidate(
		zod(addMaterialSchema, {
			defaults: {
				name: '',
				description: '',
				classroom: classroomId
			}
		})
	);

	return {
		form,
		classroom
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(addMaterialSchema));
		let message: AlertMessage;
		console.log(form.data);

		// error validation
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		try {
			// add new class
			await pb.collection('materials').create({
				...form.data
			});

			message = {
				text: 'Materi berhasil ditambahkan',
				variant: 'primary'
			};
		} catch (e) {
			// return error
			return fail(400, {
				form,
				message: {
					text: 'Materi gagal ditambahkan',
					variant: 'destructive'
				} satisfies AlertMessage
			});
		}

		return {
			form,
			message
		};
	}
} satisfies Actions;
