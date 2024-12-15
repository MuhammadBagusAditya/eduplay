import { pb } from '$lib/pb';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { RecordModel } from 'pocketbase';

export const load: PageServerLoad = async ({ params }) => {
	let material: RecordModel;

	try {
		material = await pb.collection('materials').getOne(params.id, {
			expand: 'attachments,classroom'
		});
	} catch (e) {
		error(404);
	}

	return {
		material
	};
};
