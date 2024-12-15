import { fail, superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { addQuizSchema } from '$lib/schema/teachers/quizzes';
import { zod } from 'sveltekit-superforms/adapters';
import { pb } from '$lib/pb';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url }) => {
	const { searchParams } = url;

	const classroomId = searchParams.get('classroom');

	if (!classroomId) error(400);

	const classroom = await pb.collection('classes').getOne(classroomId);

	const form = await superValidate(
		zod(addQuizSchema, {
			defaults: {
				name: '',
				description: '',
				classroom: classroomId,
				time: 0,
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
		const form = await superValidate(event, zod(addQuizSchema));
		let message: AlertMessage;

		// error validation
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		try {
			// add new class
			await pb.collection('quizzes').create({
				...form.data,
				status: 'open'
			});
			message = {
				text: 'Kuis berhasil ditambahkan',
				variant: 'primary'
			};
		} catch (e) {
			// return error
			return fail(400, {
				form,
				message: {
					text: 'Kuis gagal ditambahkan',
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
