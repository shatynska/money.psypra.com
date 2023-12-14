import { cashBookResponseDtoSchema } from './cashBookResponseDtoSchema';
import { z } from 'zod';

export const cashBooksResponseDtoSchema = z.object({
  cashBooks: z.array(z.lazy(() => cashBookResponseDtoSchema).schema),
});
