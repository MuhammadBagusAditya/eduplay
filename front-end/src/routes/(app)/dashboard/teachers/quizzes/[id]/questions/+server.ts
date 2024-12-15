import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { pb } from '$lib/pb';

export const DELETE: RequestHandler = async ({ locals, request }) => {
	// authorization for teacher only
	if (locals.user?.role !== 'teacher')
		return json(null, {
			status: 403
		});

	try {
		const json = await request.json();

		await pb.collection('questions').delete(json.id);
	} catch (e) {
		return json(null, {
			status: 404
		});
	}

	return json(null, {
		status: 200
	});
};

export const PUT: RequestHandler = async ({ locals, request }) => {
	// authorization for teacher only
	if (locals.user?.role !== 'teacher')
		return json(null, {
			status: 403
		});

	const body = await request.json();

	try {
		await pb.collection('questions').update(body.question.id, {
			order: body.question.order,
			name: body.question.name
		});
	} catch (e) {
		return json(null, {
			status: 400
		});
	}

	for (const answer of body.answers) {
		try {
			await pb.collection('answers').update(answer.id, {
				text: answer.text,
				isCorrect: body.correctAnswer === answer.id
			});
		} catch (e) {
			return json(null, {
				status: 400
			});
		}
	}

	return json(null, {
		status: 200
	});
};
