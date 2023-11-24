import { z } from 'zod';

import { cashBalanceResponseDtoSchema } from '../cashBalanceResponseDtoSchema';

export const cashBooksControllerGetCashBalanceQueryResponseSchema = z.lazy(
  () => cashBalanceResponseDtoSchema,
).schema;
