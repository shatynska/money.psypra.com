import { z } from 'zod';

export const cashBalanceResponseDtoSchema = z.object({ value: z.number() });
