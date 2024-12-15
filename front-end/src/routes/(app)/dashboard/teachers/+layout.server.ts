import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (locals.user?.role !== 'teacher') {
		error(403, {
			message: 'Anda tidak memiliki izin yang diperlukan untuk melihat konten ini.'
		});
	}
};
