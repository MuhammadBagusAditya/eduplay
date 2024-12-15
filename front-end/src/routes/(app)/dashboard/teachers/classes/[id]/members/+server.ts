import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { pb } from '$lib/pb';

export const POST: RequestHandler = async ({ request, locals, params }) => {
	const jsonData = await request.json();

	if (locals.user?.role !== 'teacher')
		return json(null, {
			status: 403
		});

	try {
		const userClassroom = await pb.collection('userClasses').getFullList({
			filter: `user = "${jsonData.id}" && classroom = "${params.id}"`
		});

		if (userClassroom.length > 0) throw new Error('');

		await pb.collection('userClasses').create({
			user: jsonData.id,
			classroom: params.id
		});
	} catch (e) {
		return json(null, {
			status: 400
		});
	}

	return json(null);
};

export const DELETE: RequestHandler = async ({ request, locals }) => {
	const jsonData = await request.json();

	if (locals.user?.role !== 'teacher')
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
