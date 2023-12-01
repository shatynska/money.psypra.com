import { z } from 'zod';

import { memberWithMembershipFeesSchema } from './memberWithMembershipFeesSchema';
import { expenseSchema } from './expenseSchema';

export const currentCashBookResponseDtoSchema = z.object({
  reportingMonths: z.array(z.number()),
  membersWithMembershipFees: z.array(
    z.lazy(() => memberWithMembershipFeesSchema).schema,
  ),
  expenses: z.array(z.lazy(() => expenseSchema).schema),
});
