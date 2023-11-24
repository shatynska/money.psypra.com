import type {
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import client from '../../../client';
import type { ResponseConfig } from '../../../client';
import type {
  UsersControllerRemoveMutationResponse,
  UsersControllerRemovePathParams,
} from '../../models/usersController/UsersControllerRemove';

/**
 * @link /api/users/:id
 */

export function useUsersControllerRemove<
  TData = UsersControllerRemoveMutationResponse,
  TError = unknown,
>(
  id: UsersControllerRemovePathParams['id'],
  options: {
    mutation?: UseMutationOptions<ResponseConfig<TData>, TError, void>;
    client?: Partial<Parameters<typeof client<TData, TError, void>>[0]>;
  } = {},
): UseMutationResult<ResponseConfig<TData>, TError, void> {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};

  return useMutation<ResponseConfig<TData>, TError, void>({
    mutationFn: () => {
      return client<TData, TError, void>({
        method: 'delete',
        url: `/api/users/${id}`,

        ...clientOptions,
      });
    },
    ...mutationOptions,
  });
}
