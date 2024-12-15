import { z } from 'zod';

export const addAttachmentSchema = z.object({
	userAssignment: z.string(),
	attachment: z
		.instanceof(File, { message: 'File harus dikirim' })
		.refine((file) => file.size < 20480000)
		.refine((file) =>
			[
				'application/pdf',
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
				'application/vnd.openxmlformats-officedocument.presentationml.presentation',
				'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
				'image/jpeg',
				'image/png',
				'image/webp',
				'video/mp4',
				'application/zip'
			].includes(file.type)
		)
});
