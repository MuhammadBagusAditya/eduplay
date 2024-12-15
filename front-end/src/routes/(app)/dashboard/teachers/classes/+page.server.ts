import { pb } from '$lib/pb';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { user: parentUser } = await parent();

	const classes = await pb.collection('classes').getFullList({
		filter: `creator = "${parentUser.id}"`
	});

	return {
		classes
	};
};
