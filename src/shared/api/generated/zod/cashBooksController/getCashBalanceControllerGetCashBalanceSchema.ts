import { z } from 'zod';
import { cashBalanceResponseDtoSchema } from '../cashBalanceResponseDtoSchema';

export const getCashBalanceControllerGetCashBalance404Schema = '';
export const getCashBalanceControllerGetCashBalancePathParamsSchema = z.object({
  id: z.string(),
});
export const getCashBalanceControllerGetCashBalanceQueryResponseSchema = z.lazy(
  () => cashBalanceResponseDtoSchema,
).schema;
