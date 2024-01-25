import { z } from 'zod';
import { createCashBookRequestDtoSchema } from '../createCashBookRequestDtoSchema';

export const createCashBookControllerExecute201Schema = z.any();
export const createCashBookControllerExecute400Schema = '';
export const createCashBookControllerExecuteMutationResponseSchema = z.any();
export const createCashBookControllerExecuteMutationRequestSchema = z.lazy(
  () => createCashBookRequestDtoSchema,
).schema;
