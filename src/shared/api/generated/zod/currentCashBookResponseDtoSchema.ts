import { memberWithMembershipFeesSchema } from './memberWithMembershipFeesSchema';
import { expenseSchema } from './expenseSchema';
import { z } from 'zod';

export const currentCashBookResponseDtoSchema = z.object({
  reportingMonths: z.array(z.number()),
  membersWithMembershipFees: z.array(
    z.lazy(() => memberWithMembershipFeesSchema).schema,
  ),
  expenses: z.array(z.lazy(() => expenseSchema).schema),
});
