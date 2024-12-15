import { z } from 'zod';

const addFormSchema = z.object({
  name: z.string({ required_error: "Nama harus diisi" }).min(1, "Nama harus diisi").trim(),
  description: z.string({ required_error: "Deskripsi harus diisi" }).min(1, "Deskripsi harus diisi"),
  schedules: z.array(z.string()).min(1, "Jadwal harus diisi"),
  thumbnail: z.instanceof(File, {
    message: "Thumbnail harus dikirim"
  }).refine((file) => file.size < 512e4, "Thumbnail harus berukuran kurang dari 5mb").refine((file) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    return allowedTypes.includes(file.type);
  }, "Ekstensi file hanya boleh berupa gambar")
});
const editFormSchema = z.object({
  name: z.string({ required_error: "Nama harus diisi" }).min(1, "Nama harus diisi").trim(),
  description: z.string({ required_error: "Deskripsi harus diisi" }).min(1, "Deskripsi harus diisi"),
  schedules: z.array(z.string()).min(1, "Jadwal harus diisi"),
  thumbnail: z.optional(
    z.instanceof(File, {
      message: "Thumbnail harus dikirim"
    }).optional().refine((file) => {
      if (!file) return true;
      return file.size < 512e4;
    }, "Thumbnail harus berukuran kurang dari 5mb").refine((file) => {
      if (!file) return true;
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
      return allowedTypes.includes(file.type);
    }, "Ekstensi file hanya boleh berupa gambar")
  )
});

export { addFormSchema as a, editFormSchema as e };
//# sourceMappingURL=classes-ByXqF7Il.js.map
