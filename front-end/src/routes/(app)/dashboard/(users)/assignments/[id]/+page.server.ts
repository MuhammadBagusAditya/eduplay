import { pb } from '$lib/pb';
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { fail, superValidate, withFiles } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { addAttachmentSchema } from '$lib/schema/users/assignments';
import type { RecordModel } from 'pocketbase';

export const load: PageServerLoad = async ({ params, locals }) => {
	let assignment: RecordModel;
	let userAssignment: RecordModel;

	try {
		assignment = await pb.collection('assignments').getOne(params.id, {
			expand: 'attachments,classroom'
		});
	} catch (e) {
		error(404);
	}

	try {
		userAssignment = await pb
			.collection('userAssignments')
			.getFirstListItem(`user = "${locals.user?.id}" && assignment = "${assignment.id}"`, {
				expand: 'attachments'
			});
	} catch (e) {
		userAssignment = await pb.collection('userAssignments').create({
			isSubmitted: false,
			user: locals.user?.id,
			assignment: assignment.id
		});
	}

	const attachmentForm = await superValidate(zod(addAttachmentSchema));

	return {
		assignment,
		attachmentForm,
		userAssignment
	};
};

export const actions = {
	'upload-attachment': async (event) => {
		const attachmentForm = await superValidate(event, zod(addAttachmentSchema));

		if (!event.locals.user)
			return {
				status: 302,
				redirect: '/auth/sign-in'
			};

		if (!attachmentForm.valid)
			return fail(400, {
				attachmentForm: withFiles(attachmentForm)
			});

		try {
			const attachment = await pb.collection('attachments').create({
				name: attachmentForm.data.attachment?.name,
				mimes: attachmentForm.data.attachment?.type,
				type: attachmentForm.data.attachment?.type.split('/')[0],
				file: attachmentForm.data.attachment,
				uploader: event.locals.user.id
			});

			await pb.collection('userAssignments').update(attachmentForm.data.userAssignment, {
				'attachments+': attachment.id,
				isSubmitted: true
			});
		} catch (e) {
			return fail(400, {
				message: {
					text: 'File tugas gagal ditambahkan',
					variant: 'destructive'
				} satisfies AlertMessage,
				attachmentForm: withFiles(attachmentForm)
			});
		}

		return {
			message: {
				text: 'File tugas berhasil ditambahkan',
				variant: 'primary'
			} satisfies AlertMessage
		};
	}
} satisfies Actions;
