import { pb } from '$lib/pb';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { RecordModel } from 'pocketbase';

export const load: PageServerLoad = async ({ params, locals }) => {
	const classId = params.id;
	let classroom: RecordModel;

	try {
		classroom = await pb.collection('classes').getOne(classId, {
			expand: 'creator,materials_via_class'
		});
	} catch (e) {
		error(404);
	}

	const materials = await pb.collection('materials').getFullList({
		filter: `classroom = "${classId}"`,
		sort: '-created'
	});

	const assignments = await pb.collection('assignments').getFullList({
		filter: `classroom = "${classId}"`,
		sort: '-created'
	});

	const quizzes = await pb.collection('quizzes').getFullList({
		filter: `classroom = "${classId}"`,
		sort: '-created'
	});

	const members = await pb.collection('userClasses').getFullList({
		filter: `classroom = "${classId}"`,
		expand: 'user',
		sort: 'user.name'
	});

	const assignmentGrades: Record<string, number> = (
		await pb.collection('userAssignments').getFullList({
			filter: `user = "${locals.user?.id}"`
		})
	).reduce((all: Record<string, number>, userAssignment: RecordModel) => {
		return {
			...all,
			[userAssignment.assignment]: userAssignment.grade
		};
	}, {});

	const quizGrades: Record<string, number> = (
		await pb.collection('userQuizGrades').getFullList({
			filter: `user = "${locals.user?.id}"`
		})
	).reduce((all: Record<string, number>, userQuiz: RecordModel) => {
		return {
			...all,
			[userQuiz.quiz]: userQuiz.grade
		};
	}, {});

	console.log(quizGrades);

	return {
		classroom,
		materials,
		assignments,
		quizzes,
		members,
		assignmentGrades,
		quizGrades
	};
};
