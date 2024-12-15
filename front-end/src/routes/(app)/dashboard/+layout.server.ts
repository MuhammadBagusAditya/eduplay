import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { pb } from '$lib/pb';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!pb.authStore.record) redirect(302, '/auth/sign-in');

	return {
		user: pb.authStore.record
	};
};
