import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { pb } from '$lib/pb';

export const DELETE: RequestHandler = async ({ request, locals }) => {
	const jsonData = await request.json();

	if (locals.user?.id !== jsonData.userId)
		return json(null, {
			status: 403
		});

	try {
		await pb.collection('userClasses').delete(jsonData.id);
	} catch (e) {
		return json(null, {
			status: 400
		});
	}

	return json(null);
};
