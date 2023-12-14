import client from '../../../client';
import { useMutation } from '@tanstack/react-query';
import type {
  AuthControllerLoginMutationRequest,
  AuthControllerLoginMutationResponse,
  AuthControllerLogin201,
  AuthControllerLogin400,
  AuthControllerLogin401,
} from '../../models/authController/AuthControllerLogin';
import type {
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

type AuthControllerLoginClient = typeof client<
  AuthControllerLoginMutationResponse,
  AuthControllerLogin201 | AuthControllerLogin400 | AuthControllerLogin401,
  AuthControllerLoginMutationRequest
>;
type AuthControllerLogin = {
  data: AuthControllerLoginMutationResponse;
  error:
    | AuthControllerLogin201
    | AuthControllerLogin400
    | AuthControllerLogin401;
  request: AuthControllerLoginMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AuthControllerLoginMutationResponse;
  client: {
    paramaters: Partial<Parameters<AuthControllerLoginClient>[0]>;
    return: Awaited<ReturnType<AuthControllerLoginClient>>;
  };
};
/**
 * @summary Login user
 * @link /api/auth/login */
export function useAuthControllerLogin(
  options: {
    mutation?: UseMutationOptions<
      AuthControllerLogin['response'],
      AuthControllerLogin['error'],
      AuthControllerLogin['request']
    >;
    client?: AuthControllerLogin['client']['paramaters'];
  } = {},
): UseMutationResult<
  AuthControllerLogin['response'],
  AuthControllerLogin['error'],
  AuthControllerLogin['request']
> {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation<
    AuthControllerLogin['response'],
    AuthControllerLogin['error'],
    AuthControllerLogin['request']
  >({
    mutationFn: async (data) => {
      const res = await client<
        AuthControllerLogin['data'],
        AuthControllerLogin['error'],
        AuthControllerLogin['request']
      >({
        method: 'post',
        url: `/api/auth/login`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
