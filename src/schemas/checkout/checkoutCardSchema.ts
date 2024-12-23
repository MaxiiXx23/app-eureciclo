import { z } from 'zod'

import { numberCardRegex, } from '../../utils/regex'

export const checkoutCardSchema = z.object({
  numberCard: z
    .string()
    .min(19, 'Númbero de cartão inválido.')
    .max(19, 'Númbero de cartão inválido.')
    .regex(
        numberCardRegex,
        'Númbero de cartão inválido.',
    ),
  expiration: z
    .string()
    .min(5, 'Data não preenchida corretamente.')
    .max(5, 'Data não preenchida corretamente.'),
  cvv: z
    .string()
    .min(1, 'CVV não preechido.')
    .max(3, 'CVV inválido.'),
  nickname: z
    .string()
    .min(1, 'Nome fantasia não preenchido.')
    .max(160, 'Nome fantasia deve conter no máximo 160 caracteres.').optional(),
})

export type formTypeCheckoutCardSchema = z.infer<
  typeof checkoutCardSchema
>
