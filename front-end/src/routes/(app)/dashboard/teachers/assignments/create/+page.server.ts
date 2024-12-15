import { fail, superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { addAssignmentSchema } from '$lib/schema/teachers/assignments';
import { zod } from 'sveltekit-superforms/adapters';
import { pb } from '$lib/pb';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url }) => {
	const { searchParams } = url;

	const classroomId = searchParams.get('classroom');

	if (!classroomId) error(400);

	const classroom = await pb.collection('classes').getOne(classroomId);

	const form = await superValidate(
		zod(addAssignmentSchema, {
			defaults: {
				name: '',
				description: '',
				classroom: classroomId,
				status: 'open'
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
		const form = await superValidate(event, zod(addAssignmentSchema));
		let message: AlertMessage;

		// error validation
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		try {
			// add new class
			await pb.collection('assignments').create({
				...form.data
			});

			message = {
				text: 'Tugas berhasil ditambahkan',
				variant: 'primary'
			};
		} catch (e) {
			// return error
			return fail(400, {
				form,
				message: {
					text: 'Tugas gagal ditambahkan',
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
