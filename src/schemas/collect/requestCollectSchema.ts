import { z } from 'zod'

export const requestCollectSchema = z.object({
  description: z
    .string()
    .min(1, 'Descrição não informada.')
    .max(200, 'Descrição deve ter no máximo 200'),
})

export type formTypeRequestCollectSchema = z.infer<
  typeof requestCollectSchema
>
