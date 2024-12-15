import { pb } from '$lib/pb';
import type { RecordModel } from 'pocketbase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const parentData = await parent();
	let classes: RecordModel[];

	if (parentData.user.role === 'teacher')
		classes = await pb.collection('classes').getFullList({
			filter: `creator = "${parentData.user.id}"`,
			expand: 'materials_via_classroom,assignments_via_classroom,quizzes_via_classroom',
			sort: 'name'
		});
	else
		classes = (
			await pb.collection('userClasses').getFullList({
				filter: `user = "${parentData.user.id}"`,
				expand:
					'classroom.materials_via_classroom,classroom.assignments_via_classroom,classroom.quizzes_via_classroom'
			})
		).reduce((all: RecordModel[], userClass) => [...all, userClass.expand?.classroom], []);

	const dataCount = {
		materials: 0,
		assignments: 0,
		quizzes: 0
	};

	classes.forEach((classroom) => {
		dataCount.materials += classroom.expand?.materials_via_classroom?.length ?? 0;
		dataCount.assignments += classroom.expand?.assignments_via_classroom?.length ?? 0;
		dataCount.quizzes += classroom.expand?.quizzes_via_classroom?.length ?? 0;
	});

	return {
		...parentData,
		classes,
		dataCount
	};
};
