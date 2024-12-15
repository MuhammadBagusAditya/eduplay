import { fail, superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { editMaterialSchema } from '$lib/schema/teachers/materials';
import { zod } from 'sveltekit-superforms/adapters';
import { pb } from '$lib/pb';
import { error } from '@sveltejs/kit';
import type { RecordModel } from 'pocketbase';

export const load: PageServerLoad = async ({ params }) => {
	let material: RecordModel;

	try {
		material = await pb.collection('materials').getOne(params.id, {
			expand: 'classroom'
		});
	} catch (e) {
		error(404);
	}

	const form = await superValidate(
		zod(editMaterialSchema, {
			defaults: {
				name: material.name,
				description: material.description
			}
		})
	);

	return {
		form,
		material
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(editMaterialSchema));
		let message: AlertMessage;

		// error validation
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		try {
			// add new class
			await pb.collection('materials').update(event.params.id, {
				...form.data
			});

			message = {
				text: 'Materi berhasil diubah',
				variant: 'primary'
			};
		} catch (e) {
			// return error
			return fail(400, {
				form,
				message: {
					text: 'Materi gagal diubah',
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
