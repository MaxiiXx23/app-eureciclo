import { z } from 'zod'

import { cpfRegex, passwordRegex } from '../../utils/regex'


export const registerClientSchema = z.object({
  fullname: z
    .string()
    .min(1, 'Nome não preenchido.')
    .max(160, 'Nome deve conter no máximo 160 caracteres.'),
  cpf: z
    .string()
    .min(14, 'CPF inválido.')
    .max(14, 'CPF inválido.')
    .regex(
      cpfRegex,
      'CPF inválido.',
    ),
  dateBirth: z
    .string()
    .min(10, 'Data não preenchida corretamente.')
    .max(10, 'Data não preenchida corretamente.'),
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

export type formTypeRegisterClientSchema = z.infer<
  typeof registerClientSchema
>
