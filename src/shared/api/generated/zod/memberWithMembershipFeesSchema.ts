import { z } from 'zod';

import { membershipFeeSchema } from './membershipFeeSchema';

export const memberWithMembershipFeesSchema = z.object({
  lastName: z.string(),
  firstName: z.string(),
  membershipFees: z.array(z.lazy(() => membershipFeeSchema).schema),
});
