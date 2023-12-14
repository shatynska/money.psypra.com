import { z } from 'zod';
import { cashBooksResponseDtoSchema } from '../cashBooksResponseDtoSchema';

export const cashBooksControllerFindAllCashBooksQueryResponseSchema = z.lazy(
  () => cashBooksResponseDtoSchema,
).schema;
