import { z } from "zod";

const jwtSchema = z.object({
  city: z.string()
})

export type JWTModel = z.infer<typeof jwtSchema>
