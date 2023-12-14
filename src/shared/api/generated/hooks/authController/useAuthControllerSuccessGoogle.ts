import client from '../../../client';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type {
  AuthControllerSuccessGoogleQueryResponse,
  AuthControllerSuccessGoogleQueryParams,
} from '../../models/authController/AuthControllerSuccessGoogle';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  WithRequired,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type AuthControllerSuccessGoogleClient = typeof client<
  AuthControllerSuccessGoogleQueryResponse,
  never,
  never
>;
type AuthControllerSuccessGoogle = {
  data: AuthControllerSuccessGoogleQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: AuthControllerSuccessGoogleQueryParams;
  headerParams: never;
  response: AuthControllerSuccessGoogleQueryResponse;
  client: {
    paramaters: Partial<Parameters<AuthControllerSuccessGoogleClient>[0]>;
    return: Awaited<ReturnType<AuthControllerSuccessGoogleClient>>;
  };
};
export const authControllerSuccessGoogleQueryKey = (
  params: AuthControllerSuccessGoogle['queryParams'],
) =>
  [{ url: '/api/auth/success-google' }, ...(params ? [params] : [])] as const;
export type AuthControllerSuccessGoogleQueryKey = ReturnType<
  typeof authControllerSuccessGoogleQueryKey
>;
export function authControllerSuccessGoogleQueryOptions<
  TQueryFnData extends
    AuthControllerSuccessGoogle['data'] = AuthControllerSuccessGoogle['data'],
  TError = AuthControllerSuccessGoogle['error'],
  TData = AuthControllerSuccessGoogle['response'],
  TQueryData = AuthControllerSuccessGoogle['response'],
>(
  params: AuthControllerSuccessGoogle['queryParams'],
  options: AuthControllerSuccessGoogle['client']['paramaters'] = {},
): WithRequired<
  QueryObserverOptions<
    AuthControllerSuccessGoogle['response'],
    TError,
    TData,
    TQueryData
  >,
  'queryKey'
> {
  const queryKey = authControllerSuccessGoogleQueryKey(params);
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/auth/success-google`,
        params,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/auth/success-google */
export function useAuthControllerSuccessGoogle<
  TQueryFnData extends
    AuthControllerSuccessGoogle['data'] = AuthControllerSuccessGoogle['data'],
  TError = AuthControllerSuccessGoogle['error'],
  TData = AuthControllerSuccessGoogle['response'],
  TQueryData = AuthControllerSuccessGoogle['response'],
  TQueryKey extends QueryKey = AuthControllerSuccessGoogleQueryKey,
>(
  params: AuthControllerSuccessGoogle['queryParams'],
  options: {
    query?: QueryObserverOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData,
      TQueryKey
    >;
    client?: AuthControllerSuccessGoogle['client']['paramaters'];
  } = {},
): UseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? authControllerSuccessGoogleQueryKey(params);
  const query = useQuery<any, TError, TData, any>({
    ...authControllerSuccessGoogleQueryOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData
    >(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const authControllerSuccessGoogleSuspenseQueryKey = (
  params: AuthControllerSuccessGoogle['queryParams'],
) =>
  [{ url: '/api/auth/success-google' }, ...(params ? [params] : [])] as const;
export type AuthControllerSuccessGoogleSuspenseQueryKey = ReturnType<
  typeof authControllerSuccessGoogleSuspenseQueryKey
>;
export function authControllerSuccessGoogleSuspenseQueryOptions<
  TQueryFnData extends
    AuthControllerSuccessGoogle['data'] = AuthControllerSuccessGoogle['data'],
  TError = AuthControllerSuccessGoogle['error'],
  TData = AuthControllerSuccessGoogle['response'],
>(
  params: AuthControllerSuccessGoogle['queryParams'],
  options: AuthControllerSuccessGoogle['client']['paramaters'] = {},
): WithRequired<
  UseSuspenseQueryOptions<
    AuthControllerSuccessGoogle['response'],
    TError,
    TData
  >,
  'queryKey'
> {
  const queryKey = authControllerSuccessGoogleSuspenseQueryKey(params);
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/auth/success-google`,
        params,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/auth/success-google */
export function useAuthControllerSuccessGoogleSuspense<
  TQueryFnData extends
    AuthControllerSuccessGoogle['data'] = AuthControllerSuccessGoogle['data'],
  TError = AuthControllerSuccessGoogle['error'],
  TData = AuthControllerSuccessGoogle['response'],
  TQueryKey extends QueryKey = AuthControllerSuccessGoogleSuspenseQueryKey,
>(
  params: AuthControllerSuccessGoogle['queryParams'],
  options: {
    query?: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    client?: AuthControllerSuccessGoogle['client']['paramaters'];
  } = {},
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    authControllerSuccessGoogleSuspenseQueryKey(params);
  const query = useSuspenseQuery<any, TError, TData, any>({
    ...authControllerSuccessGoogleSuspenseQueryOptions<
      TQueryFnData,
      TError,
      TData
    >(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
