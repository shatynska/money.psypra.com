import type {
  QueryKey,
  UseQueryResult,
  UseQueryOptions,
  QueryOptions,
} from '@tanstack/react-query';
import { useQuery, queryOptions } from '@tanstack/react-query';
import client from '../../../client';
import type { AuthControllerGoogleAuthQueryResponse } from '../../models/authController/AuthControllerGoogleAuth';

export const authControllerGoogleAuthQueryKey = () =>
  [{ url: `/api/auth/google` }] as const;
export function authControllerGoogleAuthQueryOptions<
  TData = AuthControllerGoogleAuthQueryResponse,
  TError = unknown,
>(
  options: Partial<Parameters<typeof client>[0]> = {},
): UseQueryOptions<TData, TError> {
  const queryKey = authControllerGoogleAuthQueryKey();

  return queryOptions({
    queryKey: queryKey as QueryKey,
    queryFn: () => {
      return client<TData, TError>({
        method: 'get',
        url: `/api/auth/google`,

        ...options,
      }).then((res) => res.data);
    },
  });
}

/**
 * @link /api/auth/google
 */

export function useAuthControllerGoogleAuth<
  TData = AuthControllerGoogleAuthQueryResponse,
  TError = unknown,
>(
  options: {
    query?: UseQueryOptions<TData, TError>;
    client?: Partial<Parameters<typeof client<TData, TError>>[0]>;
  } = {},
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? authControllerGoogleAuthQueryKey();

  const query = useQuery<TData, TError>({
    ...authControllerGoogleAuthQueryOptions<TData, TError>(clientOptions),
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
