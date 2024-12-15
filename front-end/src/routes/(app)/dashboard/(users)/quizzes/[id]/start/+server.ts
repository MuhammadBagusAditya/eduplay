import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { pb } from '$lib/pb';
import type { RecordModel } from 'pocketbase';
import { DateTime } from 'luxon';

export const POST: RequestHandler = async ({ locals, params, url, request }) => {
	let userQuiz: RecordModel;
	const jsonData = await request.json();

	console.log(jsonData);

	try {
		userQuiz = await pb
			.collection('userQuizzes')
			.getFirstListItem(`user = "${locals.user?.id}" && quiz = "${params.id}"`);
	} catch (e) {
		return json(
			{
				message: 'Tidak ditemukan'
			},
			{
				status: 404
			}
		);
	}

	try {
		await pb.collection('userQuizzes').update(userQuiz.id, {
			answers: Object.values(jsonData.answerIds),
			isSubmitted: DateTime.fromMillis(userQuiz.endTime).diffNow().toMillis() <= 0
		});
	} catch (e) {
		return json(
			{
				message: 'Gagal disimpan'
			},
			{
				status: 400
			}
		);
	}

	return json(null);
};
