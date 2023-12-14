import { z } from 'zod';

export const cashBookResponseDtoSchema = z.object({
  id: z.string(),
  title: z.string(),
});
