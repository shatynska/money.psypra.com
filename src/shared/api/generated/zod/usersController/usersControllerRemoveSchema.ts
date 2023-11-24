import { z } from 'zod';

export const usersControllerRemoveMutationResponseSchema = z.any();
export const usersControllerRemovePathParamsSchema = z.object({
  id: z.string(),
});
