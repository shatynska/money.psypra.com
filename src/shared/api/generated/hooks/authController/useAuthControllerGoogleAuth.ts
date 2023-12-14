import client from '../../../client';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type { AuthControllerGoogleAuthQueryResponse } from '../../models/authController/AuthControllerGoogleAuth';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  WithRequired,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type AuthControllerGoogleAuthClient = typeof client<
  AuthControllerGoogleAuthQueryResponse,
  never,
  never
>;
type AuthControllerGoogleAuth = {
  data: AuthControllerGoogleAuthQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AuthControllerGoogleAuthQueryResponse;
  client: {
    paramaters: Partial<Parameters<AuthControllerGoogleAuthClient>[0]>;
    return: Awaited<ReturnType<AuthControllerGoogleAuthClient>>;
  };
};
export const authControllerGoogleAuthQueryKey = () =>
  [{ url: '/api/auth/google' }] as const;
export type AuthControllerGoogleAuthQueryKey = ReturnType<
  typeof authControllerGoogleAuthQueryKey
>;
export function authControllerGoogleAuthQueryOptions<
  TQueryFnData extends
    AuthControllerGoogleAuth['data'] = AuthControllerGoogleAuth['data'],
  TError = AuthControllerGoogleAuth['error'],
  TData = AuthControllerGoogleAuth['response'],
  TQueryData = AuthControllerGoogleAuth['response'],
>(
  options: AuthControllerGoogleAuth['client']['paramaters'] = {},
): WithRequired<
  QueryObserverOptions<
    AuthControllerGoogleAuth['response'],
    TError,
    TData,
    TQueryData
  >,
  'queryKey'
> {
  const queryKey = authControllerGoogleAuthQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/auth/google`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/auth/google */
export function useAuthControllerGoogleAuth<
  TQueryFnData extends
    AuthControllerGoogleAuth['data'] = AuthControllerGoogleAuth['data'],
  TError = AuthControllerGoogleAuth['error'],
  TData = AuthControllerGoogleAuth['response'],
  TQueryData = AuthControllerGoogleAuth['response'],
  TQueryKey extends QueryKey = AuthControllerGoogleAuthQueryKey,
>(
  options: {
    query?: QueryObserverOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData,
      TQueryKey
    >;
    client?: AuthControllerGoogleAuth['client']['paramaters'];
  } = {},
): UseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? authControllerGoogleAuthQueryKey();
  const query = useQuery<any, TError, TData, any>({
    ...authControllerGoogleAuthQueryOptions<
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
export const authControllerGoogleAuthSuspenseQueryKey = () =>
  [{ url: '/api/auth/google' }] as const;
export type AuthControllerGoogleAuthSuspenseQueryKey = ReturnType<
  typeof authControllerGoogleAuthSuspenseQueryKey
>;
export function authControllerGoogleAuthSuspenseQueryOptions<
  TQueryFnData extends
    AuthControllerGoogleAuth['data'] = AuthControllerGoogleAuth['data'],
  TError = AuthControllerGoogleAuth['error'],
  TData = AuthControllerGoogleAuth['response'],
>(
  options: AuthControllerGoogleAuth['client']['paramaters'] = {},
): WithRequired<
  UseSuspenseQueryOptions<AuthControllerGoogleAuth['response'], TError, TData>,
  'queryKey'
> {
  const queryKey = authControllerGoogleAuthSuspenseQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/auth/google`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/auth/google */
export function useAuthControllerGoogleAuthSuspense<
  TQueryFnData extends
    AuthControllerGoogleAuth['data'] = AuthControllerGoogleAuth['data'],
  TError = AuthControllerGoogleAuth['error'],
  TData = AuthControllerGoogleAuth['response'],
  TQueryKey extends QueryKey = AuthControllerGoogleAuthSuspenseQueryKey,
>(
  options: {
    query?: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    client?: AuthControllerGoogleAuth['client']['paramaters'];
  } = {},
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? authControllerGoogleAuthSuspenseQueryKey();
  const query = useSuspenseQuery<any, TError, TData, any>({
    ...authControllerGoogleAuthSuspenseQueryOptions<
      TQueryFnData,
      TError,
      TData
    >(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
