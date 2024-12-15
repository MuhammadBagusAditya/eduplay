import type { PageServerLoad, Actions } from './$types';
import { superValidate, withFiles, type SuperValidated, fail } from 'sveltekit-superforms';
import { editAvatarSchema, editProfileSchema as formSchema } from '$lib/schema/edit-profile';
import { zod } from 'sveltekit-superforms/adapters';
import { pb } from '$lib/pb';
import { ClientResponseError } from 'pocketbase';

// Load data from server
export const load: PageServerLoad = async ({ locals }) => {
	const defaults = {
		username: locals.user?.username,
		email: locals.user?.email,
		name: locals.user?.name,
		bio: locals.user?.bio
	};

	const form = await superValidate(
		zod(formSchema, {
			defaults
		})
	);

	const avatarForm = await superValidate(zod(editAvatarSchema));

	if (!locals.user) {
		return {
			form,
			avatarForm,
			status: 302,
			redirect: '/auth/sign-in'
		};
	}

	return {
		form,
		avatarForm
	};
};

export const actions = {
	update: async (event) => {
		// validation
		const form = await superValidate(event, zod(formSchema));
		let message: AlertMessage | null;

		// check user
		if (!pb.authStore.record)
			return {
				status: 302,
				redirect: '/auth/sign-in'
			};

		try {
			const user = await pb
				.collection('users')
				.getFirstListItem(`username = "${form.data.username}"`);

			if (user.id === event.locals.user?.id) throw new Error();

			return fail(400, {
				message: {
					text: 'Username sudah diambil',
					variant: 'destructive'
				} satisfies AlertMessage,
				form
			});
		} catch (e) {
			//
		}

		try {
			// update data
			await pb.collection('users').update(pb.authStore.record.id, {
				...form.data
			});

			// set message
			message = {
				text: 'Profil berhasil diubah',
				variant: 'primary'
			};
		} catch (e) {
			// return error
			return fail(400, {
				message: {
					text: 'Profil gagal diubah',
					variant: 'destructive'
				} satisfies AlertMessage,
				form
			});
		}

		// return message
		return {
			message,
			form: withFiles(form)
		};
	},

	'file-upload': async (event) => {
		// validation
		const form = await superValidate(event, zod(editAvatarSchema));

		// check user
		if (!pb.authStore.record)
			return {
				status: 302,
				redirect: '/auth/sign-in'
			};

		const avatar = form.data.avatar;

		// check avatar is uploaded or not
		if (!avatar) {
			return fail(400, {
				form: withFiles(form),
				message: {
					text: 'Avatar tidak dapat diupload',
					variant: 'destructive'
				} satisfies AlertMessage
			});
		}

		try {
			// upload avatar
			await pb.collection('users').update(pb.authStore.record.id, {
				avatar
			});

			// return message
			return {
				form: withFiles(form),
				message: {
					text: 'Avatar berhasil diubah',
					variant: 'primary'
				} satisfies AlertMessage
			};
		} catch (e) {
			// return error
			return fail(400, {
				form: withFiles(form),
				message: {
					text: 'Avatar gagal diubah',
					variant: 'destructive'
				}
			});
		}
	}
} satisfies Actions;
