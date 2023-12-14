import { z } from 'zod';

export const expenseSchema = z.object({
  date: z.string().datetime(),
  amount: z.number(),
  details: z.string(),
});
