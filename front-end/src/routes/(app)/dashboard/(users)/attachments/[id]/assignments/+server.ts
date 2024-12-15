import { error, json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { pb } from '$lib/pb';

export const DELETE: RequestHandler = async ({ locals, params, request }) => {
	// authorization for student only
	if (locals.user?.role !== 'student')
		return json(null, {
			status: 403
		});

	try {
		const jsonData = await request.json();

		await pb.collection('userAssignments').update(jsonData.userAssignment, {
			'attachments-': params.id
		});

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
