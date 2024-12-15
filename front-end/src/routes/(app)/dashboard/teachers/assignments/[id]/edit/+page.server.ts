import { fail, superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { editAssignmentSchema } from '$lib/schema/teachers/assignments';
import { zod } from 'sveltekit-superforms/adapters';
import { pb } from '$lib/pb';
import { error } from '@sveltejs/kit';
import type { RecordModel } from 'pocketbase';

export const load: PageServerLoad = async ({ params }) => {
	let assignment: RecordModel;

	try {
		assignment = await pb.collection('assignments').getOne(params.id, {
			expand: 'classroom'
		});
	} catch (e) {
		error(404);
	}

	const form = await superValidate(
		zod(editAssignmentSchema, {
			defaults: {
				name: assignment.name,
				description: assignment.description,
				status: assignment.status
			}
		})
	);

	return {
		form,
		assignment
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(editAssignmentSchema));
		let message: AlertMessage;

		// error validation
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		try {
			// add new class
			await pb.collection('assignments').update(event.params.id, {
				...form.data
			});

			message = {
				text: 'Tugas berhasil diubah',
				variant: 'primary'
			};
		} catch (e) {
			// return error
			return fail(400, {
				form,
				message: {
					text: 'Tugas gagal diubah',
					variant: 'destructive'
				} satisfies AlertMessage
			});
		}

		return {
			form,
			message
		};
	}
} satisfies Actions;
