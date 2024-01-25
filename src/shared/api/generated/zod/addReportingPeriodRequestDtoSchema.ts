import { z } from 'zod';

export const addReportingPeriodRequestDtoSchema = z.object({
  cashBookId: z.string(),
  title: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});
