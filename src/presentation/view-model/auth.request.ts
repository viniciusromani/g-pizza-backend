import { z } from 'zod';

export const postAuthSchema = z.object({
  zipcode: z.string()
});
