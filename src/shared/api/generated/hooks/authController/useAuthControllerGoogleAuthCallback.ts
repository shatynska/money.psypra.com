import client from '../../../client';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type { AuthControllerGoogleAuthCallbackQueryResponse } from '../../models/authController/AuthControllerGoogleAuthCallback';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  WithRequired,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type AuthControllerGoogleAuthCallbackClient = typeof client<
  AuthControllerGoogleAuthCallbackQueryResponse,
  never,
  never
>;
type AuthControllerGoogleAuthCallback = {
  data: AuthControllerGoogleAuthCallbackQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AuthControllerGoogleAuthCallbackQueryResponse;
  client: {
    paramaters: Partial<Parameters<AuthControllerGoogleAuthCallbackClient>[0]>;
    return: Awaited<ReturnType<AuthControllerGoogleAuthCallbackClient>>;
  };
};
export const authControllerGoogleAuthCallbackQueryKey = () =>
  [{ url: '/api/auth/google/callback' }] as const;
export type AuthControllerGoogleAuthCallbackQueryKey = ReturnType<
  typeof authControllerGoogleAuthCallbackQueryKey
>;
export function authControllerGoogleAuthCallbackQueryOptions<
  TQueryFnData extends
    AuthControllerGoogleAuthCallback['data'] = AuthControllerGoogleAuthCallback['data'],
  TError = AuthControllerGoogleAuthCallback['error'],
  TData = AuthControllerGoogleAuthCallback['response'],
  TQueryData = AuthControllerGoogleAuthCallback['response'],
>(
  options: AuthControllerGoogleAuthCallback['client']['paramaters'] = {},
): WithRequired<
  QueryObserverOptions<
    AuthControllerGoogleAuthCallback['response'],
    TError,
    TData,
    TQueryData
  >,
  'queryKey'
> {
  const queryKey = authControllerGoogleAuthCallbackQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/auth/google/callback`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/auth/google/callback */
export function useAuthControllerGoogleAuthCallback<
  TQueryFnData extends
    AuthControllerGoogleAuthCallback['data'] = AuthControllerGoogleAuthCallback['data'],
  TError = AuthControllerGoogleAuthCallback['error'],
  TData = AuthControllerGoogleAuthCallback['response'],
  TQueryData = AuthControllerGoogleAuthCallback['response'],
  TQueryKey extends QueryKey = AuthControllerGoogleAuthCallbackQueryKey,
>(
  options: {
    query?: QueryObserverOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData,
      TQueryKey
    >;
    client?: AuthControllerGoogleAuthCallback['client']['paramaters'];
  } = {},
): UseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? authControllerGoogleAuthCallbackQueryKey();
  const query = useQuery<any, TError, TData, any>({
    ...authControllerGoogleAuthCallbackQueryOptions<
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
export const authControllerGoogleAuthCallbackSuspenseQueryKey = () =>
  [{ url: '/api/auth/google/callback' }] as const;
export type AuthControllerGoogleAuthCallbackSuspenseQueryKey = ReturnType<
  typeof authControllerGoogleAuthCallbackSuspenseQueryKey
>;
export function authControllerGoogleAuthCallbackSuspenseQueryOptions<
  TQueryFnData extends
    AuthControllerGoogleAuthCallback['data'] = AuthControllerGoogleAuthCallback['data'],
  TError = AuthControllerGoogleAuthCallback['error'],
  TData = AuthControllerGoogleAuthCallback['response'],
>(
  options: AuthControllerGoogleAuthCallback['client']['paramaters'] = {},
): WithRequired<
  UseSuspenseQueryOptions<
    AuthControllerGoogleAuthCallback['response'],
    TError,
    TData
  >,
  'queryKey'
> {
  const queryKey = authControllerGoogleAuthCallbackSuspenseQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/auth/google/callback`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/auth/google/callback */
export function useAuthControllerGoogleAuthCallbackSuspense<
  TQueryFnData extends
    AuthControllerGoogleAuthCallback['data'] = AuthControllerGoogleAuthCallback['data'],
  TError = AuthControllerGoogleAuthCallback['error'],
  TData = AuthControllerGoogleAuthCallback['response'],
  TQueryKey extends QueryKey = AuthControllerGoogleAuthCallbackSuspenseQueryKey,
>(
  options: {
    query?: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    client?: AuthControllerGoogleAuthCallback['client']['paramaters'];
  } = {},
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    authControllerGoogleAuthCallbackSuspenseQueryKey();
  const query = useSuspenseQuery<any, TError, TData, any>({
    ...authControllerGoogleAuthCallbackSuspenseQueryOptions<
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
