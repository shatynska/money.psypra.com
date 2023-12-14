import client from '../../../client';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type { AuthControllerRefreshTokensQueryResponse } from '../../models/authController/AuthControllerRefreshTokens';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  WithRequired,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type AuthControllerRefreshTokensClient = typeof client<
  AuthControllerRefreshTokensQueryResponse,
  never,
  never
>;
type AuthControllerRefreshTokens = {
  data: AuthControllerRefreshTokensQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AuthControllerRefreshTokensQueryResponse;
  client: {
    paramaters: Partial<Parameters<AuthControllerRefreshTokensClient>[0]>;
    return: Awaited<ReturnType<AuthControllerRefreshTokensClient>>;
  };
};
export const authControllerRefreshTokensQueryKey = () =>
  [{ url: '/api/auth/refresh-tokens' }] as const;
export type AuthControllerRefreshTokensQueryKey = ReturnType<
  typeof authControllerRefreshTokensQueryKey
>;
export function authControllerRefreshTokensQueryOptions<
  TQueryFnData extends
    AuthControllerRefreshTokens['data'] = AuthControllerRefreshTokens['data'],
  TError = AuthControllerRefreshTokens['error'],
  TData = AuthControllerRefreshTokens['response'],
  TQueryData = AuthControllerRefreshTokens['response'],
>(
  options: AuthControllerRefreshTokens['client']['paramaters'] = {},
): WithRequired<
  QueryObserverOptions<
    AuthControllerRefreshTokens['response'],
    TError,
    TData,
    TQueryData
  >,
  'queryKey'
> {
  const queryKey = authControllerRefreshTokensQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/auth/refresh-tokens`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/auth/refresh-tokens */
export function useAuthControllerRefreshTokens<
  TQueryFnData extends
    AuthControllerRefreshTokens['data'] = AuthControllerRefreshTokens['data'],
  TError = AuthControllerRefreshTokens['error'],
  TData = AuthControllerRefreshTokens['response'],
  TQueryData = AuthControllerRefreshTokens['response'],
  TQueryKey extends QueryKey = AuthControllerRefreshTokensQueryKey,
>(
  options: {
    query?: QueryObserverOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData,
      TQueryKey
    >;
    client?: AuthControllerRefreshTokens['client']['paramaters'];
  } = {},
): UseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? authControllerRefreshTokensQueryKey();
  const query = useQuery<any, TError, TData, any>({
    ...authControllerRefreshTokensQueryOptions<
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
export const authControllerRefreshTokensSuspenseQueryKey = () =>
  [{ url: '/api/auth/refresh-tokens' }] as const;
export type AuthControllerRefreshTokensSuspenseQueryKey = ReturnType<
  typeof authControllerRefreshTokensSuspenseQueryKey
>;
export function authControllerRefreshTokensSuspenseQueryOptions<
  TQueryFnData extends
    AuthControllerRefreshTokens['data'] = AuthControllerRefreshTokens['data'],
  TError = AuthControllerRefreshTokens['error'],
  TData = AuthControllerRefreshTokens['response'],
>(
  options: AuthControllerRefreshTokens['client']['paramaters'] = {},
): WithRequired<
  UseSuspenseQueryOptions<
    AuthControllerRefreshTokens['response'],
    TError,
    TData
  >,
  'queryKey'
> {
  const queryKey = authControllerRefreshTokensSuspenseQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/auth/refresh-tokens`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/auth/refresh-tokens */
export function useAuthControllerRefreshTokensSuspense<
  TQueryFnData extends
    AuthControllerRefreshTokens['data'] = AuthControllerRefreshTokens['data'],
  TError = AuthControllerRefreshTokens['error'],
  TData = AuthControllerRefreshTokens['response'],
  TQueryKey extends QueryKey = AuthControllerRefreshTokensSuspenseQueryKey,
>(
  options: {
    query?: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    client?: AuthControllerRefreshTokens['client']['paramaters'];
  } = {},
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? authControllerRefreshTokensSuspenseQueryKey();
  const query = useSuspenseQuery<any, TError, TData, any>({
    ...authControllerRefreshTokensSuspenseQueryOptions<
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
