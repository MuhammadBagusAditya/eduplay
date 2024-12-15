import { fail, superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { editQuizSchema } from '$lib/schema/teachers/quizzes';
import { zod } from 'sveltekit-superforms/adapters';
import { pb } from '$lib/pb';
import { error } from '@sveltejs/kit';
import type { RecordModel } from 'pocketbase';

export const load: PageServerLoad = async ({ params }) => {
	let quiz: RecordModel;

	try {
		quiz = await pb.collection('quizzes').getOne(params.id, {
			expand: 'classroom'
		});
	} catch (e) {
		error(404);
	}

	console.log(quiz);

	const form = await superValidate(
		zod(editQuizSchema, {
			defaults: {
				name: quiz.name,
				description: quiz.description,
				time: quiz.time,
				status: quiz.status
			}
		})
	);

	return {
		form,
		quiz
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(editQuizSchema));
		let message: AlertMessage;

		// error validation
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		try {
			// add new class
			await pb.collection('quizzes').update(event.params.id, {
				...form.data
			});
			message = {
				text: 'Kuis berhasil diubah',
				variant: 'primary'
			};
		} catch (e) {
			// return error
			return fail(400, {
				form,
				message: {
					text: 'Kuis gagal diubah',
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
