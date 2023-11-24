import type {
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import client from '../../../client';
import type { ResponseConfig } from '../../../client';
import type {
  AuthControllerRegisterMutationRequest,
  AuthControllerRegisterMutationResponse,
  AuthControllerRegister201,
  AuthControllerRegister400,
  AuthControllerRegister409,
} from '../../models/authController/AuthControllerRegister';

/**
 * @summary Register user
 * @link /api/auth/register
 */

export function useAuthControllerRegister<
  TData = AuthControllerRegisterMutationResponse,
  TError =
    | AuthControllerRegister201
    | AuthControllerRegister400
    | AuthControllerRegister409,
  TVariables = AuthControllerRegisterMutationRequest,
>(
  options: {
    mutation?: UseMutationOptions<ResponseConfig<TData>, TError, TVariables>;
    client?: Partial<Parameters<typeof client<TData, TError, TVariables>>[0]>;
  } = {},
): UseMutationResult<ResponseConfig<TData>, TError, TVariables> {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};

  return useMutation<ResponseConfig<TData>, TError, TVariables>({
    mutationFn: (data) => {
      return client<TData, TError, TVariables>({
        method: 'post',
        url: `/api/auth/register`,
        data,

        ...clientOptions,
      });
    },
    ...mutationOptions,
  });
}
