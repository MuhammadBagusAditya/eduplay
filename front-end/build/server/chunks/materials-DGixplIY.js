import { z } from 'zod';

const addMaterialSchema = z.object({
  name: z.string({ required_error: "Nama harus diisi" }).min(1, "Nama harus diisi").trim(),
  description: z.string({ required_error: "Deskripsi harus diisi" }).min(1, "Deskripsi harus diisi"),
  classroom: z.string({ required_error: "ID Kelas harus diisi" }).min(1, "ID Kelas harus diisi")
});
const editMaterialSchema = addMaterialSchema.omit({ classroom: true });
const addAttachmentSchema = z.object({
  attachment: z.instanceof(File, { message: "File harus dikirim" }).refine((file) => file.size < 2048e4).refine(
    (file) => [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "image/jpeg",
      "image/png",
      "image/webp",
      "video/mp4",
      "application/zip"
    ].includes(file.type)
  )
});

export { addMaterialSchema as a, addAttachmentSchema as b, editMaterialSchema as e };
//# sourceMappingURL=materials-DGixplIY.js.map
