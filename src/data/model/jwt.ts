import { z } from "zod";

const jwtAuthSchema = z.object({
  city: z.string()
})

export type JWTAuth = z.infer<typeof jwtAuthSchema>
