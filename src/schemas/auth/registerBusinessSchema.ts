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
  password: z
    .string()
    .min(8, 'A senha deve possuir 8 à 16 caracteres.')
    .max(16, 'A senha deve possuir 8 à 16 caracteres.')
    .regex(
      passwordRegex,
      'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial',
    ),
  confirmPassword: z
    .string()
    .min(8, 'A senha deve possuir 8 à 16 caracteres.')
    .max(16, 'A senha deve possuir 8 à 16 caracteres.')
    .regex(
      passwordRegex,
      'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial',
    ),
})

export type formTypeRegisterBusinessSchema = z.infer<
  typeof registerBusinessSchema
>