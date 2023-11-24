import { z } from 'zod';

export const authControllerSuccessGoogleQueryParamsSchema = z.object({
  token: z.string(),
});
export const authControllerSuccessGoogleQueryResponseSchema = z.any();
