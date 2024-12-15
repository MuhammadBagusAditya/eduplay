import { pb } from '$lib/pb';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const classroom = await pb.collection('classes').getOne(params.id);

		const materials = await pb.collection('materials').getFullList({
			filter: `classroom = "${classroom.id}"`,
			sort: '-created'
		});

		const assignments = await pb.collection('assignments').getFullList({
			filter: `classroom = "${classroom.id}"`,
			sort: '-created'
		});

		const quizzes = await pb.collection('quizzes').getFullList({
			filter: `classroom = "${classroom.id}"`,
			sort: '-created'
		});

		const members = await pb.collection('userClasses').getFullList({
			filter: `classroom = "${classroom.id}"`,
			expand: 'user',
			sort: 'user.name'
		});

		return {
			classroom,
			materials,
			assignments,
			quizzes,
			members
		};
	} catch (e) {
		error(500, 'Oooops, server error');
	}
};
