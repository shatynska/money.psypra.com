import { membershipFeeSchema } from './membershipFeeSchema';
import { z } from 'zod';

export const memberWithMembershipFeesSchema = z.object({
  lastName: z.string(),
  firstName: z.string(),
  membershipFees: z.array(z.lazy(() => membershipFeeSchema).schema),
});
