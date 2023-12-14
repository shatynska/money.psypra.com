import { z } from 'zod';
import { userResponseDtoSchema } from '../userResponseDtoSchema';
import { registerDtoSchema } from '../registerDtoSchema';

export const authControllerRegister400Schema = '';
export const authControllerRegister409Schema = '';
export const authControllerRegister201Schema = z.lazy(
  () => userResponseDtoSchema,
).schema;
export const authControllerRegisterMutationRequestSchema = z.lazy(
  () => registerDtoSchema,
).schema;
export const authControllerRegisterMutationResponseSchema = z.lazy(
  () => userResponseDtoSchema,
).schema;
