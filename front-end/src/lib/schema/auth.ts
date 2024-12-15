import { z } from 'zod';

export const signUpFormSchema = z
	.object({
		username: z
			.string({ required_error: 'Username harus diisi' })
			.min(1, 'Username harus diisi')
			.trim(),
		email: z
			.string({ required_error: 'Email harus diisi' })
			.email('Email harus valid')
			.min(1, 'Email harus diisi'),
		password: z
			.string({ required_error: 'Password harus diisi' })
			.min(8, 'Password minimal 8 karakter'),
		confirmPassword: z
			.string({ required_error: 'Password harus dikonfirmasi' })
			.min(1, 'Password harus dikonfirmasi')
	})
	.refine((val) => val.password === val.confirmPassword, {
		message: 'Password tidak sama',
		path: ['confirmPassword']
	});

export type SignUpFormSchema = typeof signUpFormSchema;

export const signInFormSchema = z.object({
	email: z
		.string({ required_error: 'Email harus diisi' })
		.email('Email harus valid')
		.min(1, 'Email harus diisi'),
	password: z
		.string({ required_error: 'Password harus diisi' })
		.min(8, 'Password minimal 8 karakter')
});

export type SignInFormSchema = typeof signInFormSchema;
