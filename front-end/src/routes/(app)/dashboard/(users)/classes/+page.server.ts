import { pb } from '$lib/pb';
import type { RecordModel } from 'pocketbase';
import type { Actions, PageServerLoad } from './$types';
import { DateTime } from 'luxon';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ parent }) => {
	const { user: parentUser } = await parent();

	let classes: RecordModel[] | null = null;
	let todayClasses: RecordModel[] | null = null;

	const user = await pb.collection('users').getOne(parentUser.id, {
		expand: 'userClasses_via_user.classroom'
	});

	const currentDate = DateTime.now().weekday;

	if (user.expand?.userClasses_via_user) {
		classes = user.expand?.userClasses_via_user.map(
			(userClass: RecordModel) => userClass.expand?.classroom
		);

		todayClasses = user.expand?.userClasses_via_user
			.map((userClass: RecordModel) => userClass.expand?.classroom)
			.filter((classroom: RecordModel) => {
				return classroom.schedules.includes('' + currentDate);
			});
	}

	return {
		classes,
		todayClasses
	};
};

export const actions = {
	default: async ({ locals, request }) => {
		try {
			const formData = await request.formData();

			const userClasses = await pb.collection('userClasses').getFullList({
				filter: `user = "${locals.user?.id}" && classroom = "${formData.get('classroom')}"`
			});

			if (userClasses.length > 0)
				return fail(400, {
					message: {
						text: 'Anda sudah terdaftar',
						variant: 'destructive'
					} satisfies AlertMessage
				});

			await pb.collection('userClasses').create({
				user: locals.user?.id,
				classroom: formData.get('classroom')
			});
		} catch (e) {
			return fail(400, {
				message: {
					text: 'Gagal bergabung dengan kelas',
					variant: 'destructive'
				} satisfies AlertMessage
			});
		}

		return {
			message: {
				text: 'Berhasil bergabung',
				variant: 'primary'
			} satisfies AlertMessage
		};
	}
} satisfies Actions;
