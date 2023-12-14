import { z } from 'zod';
import { cashBookResponseDtoSchema } from '../cashBookResponseDtoSchema';

export const cashBooksControllerFindCashBookByIdPathParamsSchema = z.object({
  id: z.string(),
});
export const cashBooksControllerFindCashBookByIdQueryResponseSchema = z.lazy(
  () => cashBookResponseDtoSchema,
).schema;
