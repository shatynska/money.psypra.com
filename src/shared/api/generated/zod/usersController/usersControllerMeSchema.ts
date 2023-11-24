import { z } from 'zod';

export const usersControllerMeQueryResponseSchema = z
  .object({})
  .catchall(z.any());
