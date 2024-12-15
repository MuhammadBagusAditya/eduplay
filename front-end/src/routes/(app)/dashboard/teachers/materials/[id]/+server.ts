import { error, json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { pb } from '$lib/pb';

export const DELETE: RequestHandler = async ({ locals, params }) => {
	// authorization for teacher only
	if (locals.user?.role !== 'teacher')
		return json(null, {
			status: 403
		});

	try {
		await pb.collection('materials').delete(params.id);
	} catch (e) {
		return json(null, {
			status: 404
		});
	}

	return json(null, {
		status: 200
	});
};
