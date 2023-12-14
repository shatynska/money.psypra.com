import { z } from 'zod';

export const registerDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().nullish(),
  passportRepeat: z.string(),
});
