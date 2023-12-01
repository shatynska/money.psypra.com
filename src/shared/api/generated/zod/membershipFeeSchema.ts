import { z } from 'zod';

export const membershipFeeSchema = z.object({
  reportingMonth: z.number(),
  amount: z.number(),
});
