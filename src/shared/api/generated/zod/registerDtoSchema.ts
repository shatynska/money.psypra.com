import { z } from 'zod';

export const registerDtoSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  passportRepeat: z.string(),
});
