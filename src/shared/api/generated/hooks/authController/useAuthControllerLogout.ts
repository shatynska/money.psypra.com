import type {
  QueryKey,
  UseQueryResult,
  UseQueryOptions,
  QueryOptions,
} from '@tanstack/react-query';
import { useQuery, queryOptions } from '@tanstack/react-query';
import client from '../../../client';
import type { AuthControllerLogoutQueryResponse } from '../../models/authController/AuthControllerLogout';

export const authControllerLogoutQueryKey = () =>
  [{ url: `/api/auth/logout` }] as const;
export function authControllerLogoutQueryOptions<
  TData = AuthControllerLogoutQueryResponse,
  TError = unknown,
>(
  options: Partial<Parameters<typeof client>[0]> = {},
): UseQueryOptions<TData, TError> {
  const queryKey = authControllerLogoutQueryKey();

  return queryOptions({
    queryKey: queryKey as QueryKey,
    queryFn: () => {
      return client<TData, TError>({
        method: 'get',
        url: `/api/auth/logout`,

        ...options,
      }).then((res) => res.data);
    },
  });
}

/**
 * @summary Logout user
 * @link /api/auth/logout
 */

export function useAuthControllerLogout<
  TData = AuthControllerLogoutQueryResponse,
  TError = unknown,
>(
  options: {
    query?: UseQueryOptions<TData, TError>;
    client?: Partial<Parameters<typeof client<TData, TError>>[0]>;
  } = {},
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? authControllerLogoutQueryKey();

  const query = useQuery<TData, TError>({
    ...authControllerLogoutQueryOptions<TData, TError>(clientOptions),
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
