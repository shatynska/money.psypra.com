import client from '../../../client';
import { useMutation } from '@tanstack/react-query';
import type {
  AuthControllerRegisterMutationRequest,
  AuthControllerRegisterMutationResponse,
  AuthControllerRegister201,
  AuthControllerRegister400,
  AuthControllerRegister409,
} from '../../models/authController/AuthControllerRegister';
import type {
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

type AuthControllerRegisterClient = typeof client<
  AuthControllerRegisterMutationResponse,
  | AuthControllerRegister201
  | AuthControllerRegister400
  | AuthControllerRegister409,
  AuthControllerRegisterMutationRequest
>;
type AuthControllerRegister = {
  data: AuthControllerRegisterMutationResponse;
  error:
    | AuthControllerRegister201
    | AuthControllerRegister400
    | AuthControllerRegister409;
  request: AuthControllerRegisterMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AuthControllerRegisterMutationResponse;
  client: {
    paramaters: Partial<Parameters<AuthControllerRegisterClient>[0]>;
    return: Awaited<ReturnType<AuthControllerRegisterClient>>;
  };
};
/**
 * @summary Register user
 * @link /api/auth/register */
export function useAuthControllerRegister(
  options: {
    mutation?: UseMutationOptions<
      AuthControllerRegister['response'],
      AuthControllerRegister['error'],
      AuthControllerRegister['request']
    >;
    client?: AuthControllerRegister['client']['paramaters'];
  } = {},
): UseMutationResult<
  AuthControllerRegister['response'],
  AuthControllerRegister['error'],
  AuthControllerRegister['request']
> {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation<
    AuthControllerRegister['response'],
    AuthControllerRegister['error'],
    AuthControllerRegister['request']
  >({
    mutationFn: async (data) => {
      const res = await client<
        AuthControllerRegister['data'],
        AuthControllerRegister['error'],
        AuthControllerRegister['request']
      >({
        method: 'post',
        url: `/api/auth/register`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
