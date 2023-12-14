import { z } from 'zod';
import { userResponseDtoSchema } from '../userResponseDtoSchema';

export const usersControllerFindOnePathParamsSchema = z.object({
  idOrEmail: z.string(),
});
export const usersControllerFindOneQueryResponseSchema = z.lazy(
  () => userResponseDtoSchema,
).schema;
