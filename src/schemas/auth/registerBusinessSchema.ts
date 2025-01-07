import { z } from 'zod'

import { cnpjRegex, passwordRegex } from '../../utils/regex'


export const registerBusinessSchema = z.object({
  nameFantasy: z
    .string()
    .min(1, 'Nome fantasia não preenchido.')
    .max(160, 'Nome fantasia deve conter no máximo 160 caracteres.'),
  cnpj: z
    .string()
    .min(18, 'CPNJ inválido.')
    .max(18, 'CPNJ inválido.')
    .regex(
      cnpjRegex,
      'CPNJ inválido.',
    ),
  email: z
    .string()
    .min(1, 'E-mail não preechido.')
    .max(100, 'E-mail inválido.')
    .email('E-mail inválido.'),
})

export type formTypeRegisterBusinessSchema = z.infer<
  typeof registerBusinessSchema
>
