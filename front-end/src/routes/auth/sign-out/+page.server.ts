import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { pb } from '$lib/pb';

export const actions = {
	default: async () => {
		pb.authStore.clear();

		redirect(302, '/auth/sign-in');
	}
} satisfies Actions;
