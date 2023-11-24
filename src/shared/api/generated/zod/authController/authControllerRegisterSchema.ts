import { z } from 'zod';

import { userResponseDtoSchema } from '../userResponseDtoSchema';
import { registerDtoSchema } from '../registerDtoSchema';

export const authControllerRegister400Schema = z.any();
export const authControllerRegister409Schema = z.any();
export const authControllerRegister201Schema = z.lazy(
  () => userResponseDtoSchema,
).schema;
export const authControllerRegisterMutationRequestSchema = z.lazy(
  () => registerDtoSchema,
).schema;
export const authControllerRegisterMutationResponseSchema = z.lazy(
  () => userResponseDtoSchema,
).schema;
