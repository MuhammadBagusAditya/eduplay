import { pb } from '$lib/pb';
import { type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const user = pb.authStore.record;

	event.locals.user = user;

	const response = await resolve(event);

	return response;
};
