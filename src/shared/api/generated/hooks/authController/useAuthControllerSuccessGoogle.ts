import type {
  QueryKey,
  UseQueryResult,
  UseQueryOptions,
  QueryOptions,
} from '@tanstack/react-query';
import { useQuery, queryOptions } from '@tanstack/react-query';
import client from '../../../client';
import type {
  AuthControllerSuccessGoogleQueryResponse,
  AuthControllerSuccessGoogleQueryParams,
} from '../../models/authController/AuthControllerSuccessGoogle';

export const authControllerSuccessGoogleQueryKey = (
  params: AuthControllerSuccessGoogleQueryParams,
) =>
  [{ url: `/api/auth/success-google` }, ...(params ? [params] : [])] as const;
export function authControllerSuccessGoogleQueryOptions<
  TData = AuthControllerSuccessGoogleQueryResponse,
  TError = unknown,
>(
  params: AuthControllerSuccessGoogleQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): UseQueryOptions<TData, TError> {
  const queryKey = authControllerSuccessGoogleQueryKey(params);

  return queryOptions({
    queryKey: queryKey as QueryKey,
    queryFn: () => {
      return client<TData, TError>({
        method: 'get',
        url: `/api/auth/success-google`,
        params,

        ...options,
      }).then((res) => res.data);
    },
  });
}

/**
 * @link /api/auth/success-google
 */

export function useAuthControllerSuccessGoogle<
  TData = AuthControllerSuccessGoogleQueryResponse,
  TError = unknown,
>(
  params: AuthControllerSuccessGoogleQueryParams,
  options: {
    query?: UseQueryOptions<TData, TError>;
    client?: Partial<Parameters<typeof client<TData, TError>>[0]>;
  } = {},
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? authControllerSuccessGoogleQueryKey(params);

  const query = useQuery<TData, TError>({
    ...authControllerSuccessGoogleQueryOptions<TData, TError>(
      params,
      clientOptions,
    ),
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
