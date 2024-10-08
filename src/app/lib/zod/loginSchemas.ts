import { z } from 'zod';

export const createAccountSchema = z.object({
  username: z.string().min(7, 'Insira um username com pelo menos 7 letras'),
  email: z.string().email('Insira um e-mail válido').toLowerCase(),
  emailVisibility: z.boolean().default(true),
  password: z
    .string()
    .min(8, 'Por favor, insira um senha com pelo menos 8 caracteres'),
  passwordConfirm: z
    .string()
    .min(8, 'Por favor, insira um senha com pelo menos 8 caracteres'),
  name: z.string().min(5),
  type: z.string().default('student'),
});
