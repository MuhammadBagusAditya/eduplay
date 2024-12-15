import { z } from 'zod';

export const editProfileSchema = z.object({
	username: z
		.string({ required_error: 'Username harus diisi' })
		.min(1, 'Username harus diisi')
		.trim(),
	email: z.string({ required_error: 'Email harus diisi' }).min(1, 'Email harus diisi').optional(),
	name: z.string({ required_error: 'Nama harus diisi' }).min(1, 'Nama harus diisi').trim(),
	bio: z.string({ required_error: 'Bio harus diisi' }).min(1, 'Bio harus diisi')
});

export const editAvatarSchema = z.object({
	avatar: z
		.instanceof(File)
		.nullable()
		.refine((file) => {
			if (!file) return true;
			const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];

			return allowedTypes.includes(file.type);
		}, 'Avatar harus gambar yang valid')
		.refine((file) => {
			if (!file) return true;

			return file.size < 10_240_000;
		}, 'Avatar harus berukuran di bawah 10mb')
});

export type EditProfileSchema = typeof editProfileSchema;

export type editAvatarSchema = typeof editAvatarSchema;
