import { z } from 'zod';

const addQuizSchema = z.object({
  name: z.string({ required_error: "Nama harus diisi" }).min(1, "Nama harus diisi").trim(),
  description: z.string({ required_error: "Deskripsi harus diisi" }).min(1, "Deskripsi harus diisi"),
  classroom: z.string({ required_error: "ID Kelas harus diisi" }).min(1, "ID Kelas harus diisi"),
  time: z.number({ required_error: "Waktu pengerjaan harus diisi" }).min(1, "Waktu pengerjaan harus diisi"),
  status: z.string({ required_error: "Status harus diisi" }).default("open")
});
const editQuizSchema = addQuizSchema.omit({ classroom: true });
const addQuestionSchema = z.object({
  order: z.number({ required_error: "Nomor harus diisi", message: "Nomor harus diisi" }).min(1, "Nomor harus di atas 0"),
  name: z.string({ required_error: "Pertanyaan harus diisi" }).min(1, "Pertanyaan harus diisi").trim(),
  quiz: z.string({ required_error: "ID Kuis harus diisi" }).min(1, "ID Kuis harus diisi")
});
z.object({
  text: z.string({ required_error: "Jawaban harus diisi" }).min(1, "Jawaban harus diisi").trim(),
  isCorrent: z.boolean().default(false),
  question: z.string({ required_error: "ID Pertanyaan harus diisi" }).min(1, "ID Pertanyaan harus diisi")
});

export { addQuizSchema as a, addQuestionSchema as b, editQuizSchema as e };
//# sourceMappingURL=quizzes-P9z7oEAx.js.map
