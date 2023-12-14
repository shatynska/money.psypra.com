import client from '../../../client';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type { AuthControllerLogoutQueryResponse } from '../../models/authController/AuthControllerLogout';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  WithRequired,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type AuthControllerLogoutClient = typeof client<
  AuthControllerLogoutQueryResponse,
  never,
  never
>;
type AuthControllerLogout = {
  data: AuthControllerLogoutQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AuthControllerLogoutQueryResponse;
  client: {
    paramaters: Partial<Parameters<AuthControllerLogoutClient>[0]>;
    return: Awaited<ReturnType<AuthControllerLogoutClient>>;
  };
};
export const authControllerLogoutQueryKey = () =>
  [{ url: '/api/auth/logout' }] as const;
export type AuthControllerLogoutQueryKey = ReturnType<
  typeof authControllerLogoutQueryKey
>;
export function authControllerLogoutQueryOptions<
  TQueryFnData extends
    AuthControllerLogout['data'] = AuthControllerLogout['data'],
  TError = AuthControllerLogout['error'],
  TData = AuthControllerLogout['response'],
  TQueryData = AuthControllerLogout['response'],
>(
  options: AuthControllerLogout['client']['paramaters'] = {},
): WithRequired<
  QueryObserverOptions<
    AuthControllerLogout['response'],
    TError,
    TData,
    TQueryData
  >,
  'queryKey'
> {
  const queryKey = authControllerLogoutQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/auth/logout`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @summary Logout user
 * @link /api/auth/logout */
export function useAuthControllerLogout<
  TQueryFnData extends
    AuthControllerLogout['data'] = AuthControllerLogout['data'],
  TError = AuthControllerLogout['error'],
  TData = AuthControllerLogout['response'],
  TQueryData = AuthControllerLogout['response'],
  TQueryKey extends QueryKey = AuthControllerLogoutQueryKey,
>(
  options: {
    query?: QueryObserverOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData,
      TQueryKey
    >;
    client?: AuthControllerLogout['client']['paramaters'];
  } = {},
): UseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? authControllerLogoutQueryKey();
  const query = useQuery<any, TError, TData, any>({
    ...authControllerLogoutQueryOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData
    >(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const authControllerLogoutSuspenseQueryKey = () =>
  [{ url: '/api/auth/logout' }] as const;
export type AuthControllerLogoutSuspenseQueryKey = ReturnType<
  typeof authControllerLogoutSuspenseQueryKey
>;
export function authControllerLogoutSuspenseQueryOptions<
  TQueryFnData extends
    AuthControllerLogout['data'] = AuthControllerLogout['data'],
  TError = AuthControllerLogout['error'],
  TData = AuthControllerLogout['response'],
>(
  options: AuthControllerLogout['client']['paramaters'] = {},
): WithRequired<
  UseSuspenseQueryOptions<AuthControllerLogout['response'], TError, TData>,
  'queryKey'
> {
  const queryKey = authControllerLogoutSuspenseQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/auth/logout`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @summary Logout user
 * @link /api/auth/logout */
export function useAuthControllerLogoutSuspense<
  TQueryFnData extends
    AuthControllerLogout['data'] = AuthControllerLogout['data'],
  TError = AuthControllerLogout['error'],
  TData = AuthControllerLogout['response'],
  TQueryKey extends QueryKey = AuthControllerLogoutSuspenseQueryKey,
>(
  options: {
    query?: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    client?: AuthControllerLogout['client']['paramaters'];
  } = {},
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? authControllerLogoutSuspenseQueryKey();
  const query = useSuspenseQuery<any, TError, TData, any>({
    ...authControllerLogoutSuspenseQueryOptions<TQueryFnData, TError, TData>(
      clientOptions,
    ),
    queryKey,
    ...queryOptions,
  }) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
