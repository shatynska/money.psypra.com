import { z } from 'zod';

export const createCashBookRequestDtoSchema = z.object({ title: z.string() });
