import { z } from 'zod';

export const loginResponseDtoSchema = z.object({ accessToken: z.string() });
