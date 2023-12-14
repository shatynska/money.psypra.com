import client from '../../../client';
import { useMutation } from '@tanstack/react-query';
import type { UsersControllerUpdateUserMutationResponse } from '../../models/usersController/UsersControllerUpdateUser';
import type {
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

type UsersControllerUpdateUserClient = typeof client<
  UsersControllerUpdateUserMutationResponse,
  never,
  never
>;
type UsersControllerUpdateUser = {
  data: UsersControllerUpdateUserMutationResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: UsersControllerUpdateUserMutationResponse;
  client: {
    paramaters: Partial<Parameters<UsersControllerUpdateUserClient>[0]>;
    return: Awaited<ReturnType<UsersControllerUpdateUserClient>>;
  };
};
/**
 * @link /api/users */
export function useUsersControllerUpdateUser(
  options: {
    mutation?: UseMutationOptions<
      UsersControllerUpdateUser['response'],
      UsersControllerUpdateUser['error'],
      void
    >;
    client?: UsersControllerUpdateUser['client']['paramaters'];
  } = {},
): UseMutationResult<
  UsersControllerUpdateUser['response'],
  UsersControllerUpdateUser['error'],
  void
> {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation<
    UsersControllerUpdateUser['response'],
    UsersControllerUpdateUser['error'],
    void
  >({
    mutationFn: async () => {
      const res = await client<
        UsersControllerUpdateUser['data'],
        UsersControllerUpdateUser['error'],
        void
      >({
        method: 'put',
        url: `/api/users`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
