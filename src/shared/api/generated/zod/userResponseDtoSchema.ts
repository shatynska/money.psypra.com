import { z } from 'zod';

export const userResponseDtoSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  roles: z.enum([`ADMIN`, `USER`]),
});
