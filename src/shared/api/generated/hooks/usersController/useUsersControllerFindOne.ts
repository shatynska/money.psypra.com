import type {
  QueryKey,
  UseQueryResult,
  UseQueryOptions,
  QueryOptions,
} from '@tanstack/react-query';
import { useQuery, queryOptions } from '@tanstack/react-query';
import client from '../../../client';
import type {
  UsersControllerFindOneQueryResponse,
  UsersControllerFindOnePathParams,
} from '../../models/usersController/UsersControllerFindOne';

export const usersControllerFindOneQueryKey = (
  idOrEmail: UsersControllerFindOnePathParams['idOrEmail'],
) =>
  [
    { url: `/api/users/${idOrEmail}`, params: { idOrEmail: idOrEmail } },
  ] as const;
export function usersControllerFindOneQueryOptions<
  TData = UsersControllerFindOneQueryResponse,
  TError = unknown,
>(
  idOrEmail: UsersControllerFindOnePathParams['idOrEmail'],
  options: Partial<Parameters<typeof client>[0]> = {},
): UseQueryOptions<TData, TError> {
  const queryKey = usersControllerFindOneQueryKey(idOrEmail);

  return queryOptions({
    queryKey: queryKey as QueryKey,
    queryFn: () => {
      return client<TData, TError>({
        method: 'get',
        url: `/api/users/${idOrEmail}`,

        ...options,
      }).then((res) => res.data);
    },
  });
}

/**
 * @link /api/users/:idOrEmail
 */

export function useUsersControllerFindOne<
  TData = UsersControllerFindOneQueryResponse,
  TError = unknown,
>(
  idOrEmail: UsersControllerFindOnePathParams['idOrEmail'],
  options: {
    query?: UseQueryOptions<TData, TError>;
    client?: Partial<Parameters<typeof client<TData, TError>>[0]>;
  } = {},
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? usersControllerFindOneQueryKey(idOrEmail);

  const query = useQuery<TData, TError>({
    ...usersControllerFindOneQueryOptions<TData, TError>(
      idOrEmail,
      clientOptions,
    ),
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
