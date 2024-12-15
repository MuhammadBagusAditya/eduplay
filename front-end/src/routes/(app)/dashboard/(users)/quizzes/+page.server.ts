import { pb } from '$lib/pb';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const userClasses = await pb.collection('userClasses').getFullList({
		filter: `user = "${locals.user?.id}"`,
		expand: 'classroom.quizzes_via_classroom',
		sort: 'classroom.name'
	});

	const classes = userClasses.map((userClass) => {
		return userClass.expand?.classroom;
	});

	classes.forEach((record) => {
		record.expand?.quizzes_via_classroom.sort((a: any, b: any) => {
			// Sort by a specific field, e.g., 'created' in descending order
			return (new Date(b.created) as any) - (new Date(a.created) as any);
		});
	});

	return {
		classes
	};
};
