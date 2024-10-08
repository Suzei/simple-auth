import { z } from 'zod';

export const categoriesSchema = z.object({
  name: z.string().min(8, 'Este espaço deve conter ao menos 8 caractéres.'),
  category_mother: z
    .string()
    .min(8, 'Este espaço deve conter ao menos 8 caractéres')
    .default('Genérica'),

  description: z
    .string()
    .min(20, 'Este espaço deve conter ao menos 20 caractéres'),
});

export const courseSchema = z.object({
  name: z.string().min(8, 'Este espaço deve conter ao menos 8 caractéres.'),
  category: z.string(),
  objetives: z
    .string()
    .min(20, 'Este espaço deve conter ao menos 20 caractéres'),
  published: z.boolean().default(true),
});
