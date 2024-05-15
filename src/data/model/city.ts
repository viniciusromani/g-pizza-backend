import { z } from "zod";

const citySchema = z.object({
  id: z.coerce.string(),
  ibge_code: z.coerce.string(),
  name: z.string(),
  uf_code: z.coerce.string(),
  enabled: z.boolean()
})

export type CityModel = z.infer<typeof citySchema>
