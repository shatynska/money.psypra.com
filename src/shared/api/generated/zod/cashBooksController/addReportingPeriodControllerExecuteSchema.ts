import { z } from 'zod';
import { addReportingPeriodRequestDtoSchema } from '../addReportingPeriodRequestDtoSchema';

export const addReportingPeriodControllerExecute201Schema = z.any();
export const addReportingPeriodControllerExecute400Schema = '';
export const addReportingPeriodControllerExecuteMutationResponseSchema =
  z.any();
export const addReportingPeriodControllerExecuteMutationRequestSchema = z.lazy(
  () => addReportingPeriodRequestDtoSchema,
).schema;
