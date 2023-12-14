import client from '../../../client';
import { useMutation } from '@tanstack/react-query';
import type {
  UsersControllerRemoveMutationResponse,
  UsersControllerRemovePathParams,
} from '../../models/usersController/UsersControllerRemove';
import type {
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

type UsersControllerRemoveClient = typeof client<
  UsersControllerRemoveMutationResponse,
  never,
  never
>;
type UsersControllerRemove = {
  data: UsersControllerRemoveMutationResponse;
  error: never;
  request: never;
  pathParams: UsersControllerRemovePathParams;
  queryParams: never;
  headerParams: never;
  response: UsersControllerRemoveMutationResponse;
  client: {
    paramaters: Partial<Parameters<UsersControllerRemoveClient>[0]>;
    return: Awaited<ReturnType<UsersControllerRemoveClient>>;
  };
};
/**
 * @link /api/users/:id */
export function useUsersControllerRemove(
  id: UsersControllerRemovePathParams['id'],
  options: {
    mutation?: UseMutationOptions<
      UsersControllerRemove['response'],
      UsersControllerRemove['error'],
      void
    >;
    client?: UsersControllerRemove['client']['paramaters'];
  } = {},
): UseMutationResult<
  UsersControllerRemove['response'],
  UsersControllerRemove['error'],
  void
> {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation<
    UsersControllerRemove['response'],
    UsersControllerRemove['error'],
    void
  >({
    mutationFn: async () => {
      const res = await client<
        UsersControllerRemove['data'],
        UsersControllerRemove['error'],
        void
      >({
        method: 'delete',
        url: `/api/users/${id}`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
