import { z } from 'zod';

const signUpFormSchema = z.object({
  username: z.string({ required_error: "Username harus diisi" }).min(1, "Username harus diisi").trim(),
  email: z.string({ required_error: "Email harus diisi" }).email("Email harus valid").min(1, "Email harus diisi"),
  password: z.string({ required_error: "Password harus diisi" }).min(8, "Password minimal 8 karakter"),
  confirmPassword: z.string({ required_error: "Password harus dikonfirmasi" }).min(1, "Password harus dikonfirmasi")
}).refine((val) => val.password === val.confirmPassword, {
  message: "Password tidak sama",
  path: ["confirmPassword"]
});
const signInFormSchema = z.object({
  email: z.string({ required_error: "Email harus diisi" }).email("Email harus valid").min(1, "Email harus diisi"),
  password: z.string({ required_error: "Password harus diisi" }).min(8, "Password minimal 8 karakter")
});

export { signUpFormSchema as a, signInFormSchema as s };
//# sourceMappingURL=auth-nUcMnFzj.js.map
