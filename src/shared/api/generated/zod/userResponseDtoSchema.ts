import { z } from 'zod';

export const userResponseDtoSchema = z.object({
  id: z.string(),
  email: z.string(),
  roles: z.enum([`ADMIN`, `USER`]),
});
