import { z } from 'zod';
import { currentCashBookResponseDtoSchema } from '../currentCashBookResponseDtoSchema';

export const cashBooksControllerGetCurrentCashBooksQueryResponseSchema = z.lazy(
  () => currentCashBookResponseDtoSchema,
).schema;
