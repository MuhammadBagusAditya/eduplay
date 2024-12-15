import type { RecordModel } from 'pocketbase';
import type { Actions, PageServerLoad } from './$types';
import { pb } from '$lib/pb';
import { DateTime } from 'luxon';
import { redirect } from '@sveltejs/kit';
import { fail } from 'sveltekit-superforms';

export const load: PageServerLoad = async ({ locals, params }) => {
	const quiz = await pb.collection('quizzes').getOne(params.id, {
		expand: 'classroom,questions_via_quiz.answers_via_question'
	});

	let userQuiz: RecordModel;

	if (quiz.status === 'closed') redirect(302, '/dashboard/quizzes/' + params.id);

	try {
		userQuiz = await pb
			.collection('userQuizzes')
			.getFirstListItem(`user = "${locals.user?.id}" && quiz = "${params.id}"`, {
				expand: 'quiz.classroom'
			});
	} catch (e) {
		userQuiz = await pb.collection('userQuizzes').create(
			{
				user: locals.user?.id,
				quiz: params.id,
				endTime: DateTime.now().plus({ seconds: quiz.time }).toMillis(),
				isSubmitted: false
			},
			{
				expand: 'quiz.classroom'
			}
		);
	}

	if (userQuiz.isSubmitted || quiz.status === 'closed')
		redirect(302, '/dashboard/quizzes/' + params.id);

	return {
		userQuiz,
		quiz
	};
};

export const actions = {
	default: async ({ locals, params, request }) => {
		const formData = await request.formData();

		const userQuiz = await pb
			.collection('userQuizzes')
			.getFirstListItem(`user = "${locals.user?.id}" && quiz = "${params.id}"`, {
				expand: 'quiz.classroom'
			});

		await pb.collection('userQuizzes').update(userQuiz.id, {
			answers: Object.values(JSON.parse(formData.get('answers') as string)),
			isSubmitted: true
		});

		// redirect(302, '/dashboard/quizzes/' + params.id);
	}
} satisfies Actions;
