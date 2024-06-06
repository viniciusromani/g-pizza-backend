import { z } from 'zod';

export const postAuthSchema = z.object({
  city: z.string()
});
