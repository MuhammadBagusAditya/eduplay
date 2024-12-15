import { pb } from '$lib/pb';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const classes = await pb.collection('classes').getFullList({
		filter: `creator = "${locals.user?.id}"`,
		expand: 'quizzes_via_classroom',
		sort: 'name'
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
