import { error, json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { pb } from '$lib/pb';

export const DELETE: RequestHandler = async ({ locals, params }) => {
	// authorization for auth user only
	if (!locals.user)
		return json(null, {
			status: 401
		});

	try {
		await pb.collection('attachments').delete(params.id);
	} catch (e) {
		return json(null, {
			status: 404
		});
	}

	return json(null, {
		status: 200
	});
};
