import { z } from 'zod'

export const addressSchema = z.object({
    cep: z.string().min(9).max(9),
    place: z.string(),
    number: z.string(),
    complement: z.string().optional(),
    district: z.string(),
    city: z.string(),
    state: z.string(),
})

export type formTypeAddressSchema = z.infer<
  typeof addressSchema
>
