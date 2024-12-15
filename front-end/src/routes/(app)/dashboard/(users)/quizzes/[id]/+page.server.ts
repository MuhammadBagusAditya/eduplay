import { pb } from '$lib/pb';
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { RecordModel } from 'pocketbase';
import { addAnswerSchema, addQuestionSchema } from '$lib/schema/teachers/quizzes';

export const load: PageServerLoad = async ({ params, locals }) => {
	let quiz: RecordModel;
	let userQuiz: RecordModel | null;
	let quizGrade: number | null;

	try {
		quiz = await pb.collection('quizzes').getOne(params.id, {
			expand: 'questions_via_quiz.answers_via_question,classroom'
		});
	} catch (e) {
		error(404);
	}

	try {
		userQuiz = await pb
			.collection('userQuizzes')
			.getFirstListItem(`user = "${locals.user?.id}" && quiz = "${params.id}"`);
	} catch (e) {
		userQuiz = null;
	}

	try {
		quizGrade = (
			await pb
				.collection('userQuizGrades')
				.getFirstListItem(`user = "${locals.user?.id}" && quiz = "${quiz?.id}"`)
		).grade;
	} catch (e) {
		quizGrade = null;
	}

	return {
		quiz,
		userQuiz,
		quizGrade
	};
};
