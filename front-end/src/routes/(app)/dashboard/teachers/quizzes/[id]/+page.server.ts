import { pb } from '$lib/pb';
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { RecordModel } from 'pocketbase';
import { addQuestionSchema } from '$lib/schema/teachers/quizzes';
import { DateTime } from 'luxon';

export const load: PageServerLoad = async ({ params }) => {
	let quiz: RecordModel;
	let quizGrades: RecordModel[];

	try {
		quiz = await pb.collection('quizzes').getOne(params.id, {
			expand: 'questions_via_quiz.answers_via_question,classroom'
		});

		try {
			const userQuizzes = await pb.collection('userQuizzes').getFullList({
				filter: `quiz = "${quiz.id}"`
			});

			for (const userQuiz of userQuizzes) {
				const now = DateTime.now();
				const futureTime = DateTime.fromMillis(userQuiz.endTime);

				if (futureTime.diff(now).toMillis() < 0)
					await pb.collection('userQuizzes').update(userQuiz.id, {
						isSubmitted: true
					});
			}
		} catch (e) {}

		quizGrades = await pb.collection('userQuizGrades').getFullList({
			filter: `quiz = "${quiz.id}"`,
			sort: 'user_name'
		});
	} catch (e) {
		error(404);
	}

	const addQuestionForm = await superValidate(zod(addQuestionSchema), {
		defaults: {
			order: 0,
			name: '',
			quiz: quiz.id
		}
	});

	return {
		quiz,
		addQuestionForm,
		quizGrades
	};
};

export const actions = {
	'add-question': async (event) => {
		const questionForm = await superValidate(event, zod(addQuestionSchema));

		if (!questionForm.valid) {
			return fail(400, {
				questionForm
			});
		}

		try {
			const newQuestion = await pb.collection('questions').create({
				...questionForm.data
			});

			for (let i = 1; i <= 4; i++) {
				await pb.collection('answers').create({
					question: newQuestion.id,
					text: 'Jawaban ke-' + i,
					isCorrent: false
				});
			}
		} catch (e) {
			return fail(400, {
				message: {
					text: 'Pertanyaan gagal ditambahkan',
					variant: 'destructive'
				} satisfies AlertMessage,
				questionForm
			});
		}

		return {
			message: {
				text: 'Pertanyaan berhasil ditambahkan',
				variant: 'primary'
			} satisfies AlertMessage,
			questionForm
		};
	}
} satisfies Actions;
