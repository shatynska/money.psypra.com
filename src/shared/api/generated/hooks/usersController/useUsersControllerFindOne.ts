import client from '../../../client';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type {
  UsersControllerFindOneQueryResponse,
  UsersControllerFindOnePathParams,
} from '../../models/usersController/UsersControllerFindOne';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  WithRequired,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type UsersControllerFindOneClient = typeof client<
  UsersControllerFindOneQueryResponse,
  never,
  never
>;
type UsersControllerFindOne = {
  data: UsersControllerFindOneQueryResponse;
  error: never;
  request: never;
  pathParams: UsersControllerFindOnePathParams;
  queryParams: never;
  headerParams: never;
  response: UsersControllerFindOneQueryResponse;
  client: {
    paramaters: Partial<Parameters<UsersControllerFindOneClient>[0]>;
    return: Awaited<ReturnType<UsersControllerFindOneClient>>;
  };
};
export const usersControllerFindOneQueryKey = (
  idOrEmail: UsersControllerFindOnePathParams['idOrEmail'],
) =>
  [{ url: '/api/users/:idOrEmail', params: { idOrEmail: idOrEmail } }] as const;
export type UsersControllerFindOneQueryKey = ReturnType<
  typeof usersControllerFindOneQueryKey
>;
export function usersControllerFindOneQueryOptions<
  TQueryFnData extends
    UsersControllerFindOne['data'] = UsersControllerFindOne['data'],
  TError = UsersControllerFindOne['error'],
  TData = UsersControllerFindOne['response'],
  TQueryData = UsersControllerFindOne['response'],
>(
  idOrEmail: UsersControllerFindOnePathParams['idOrEmail'],
  options: UsersControllerFindOne['client']['paramaters'] = {},
): WithRequired<
  QueryObserverOptions<
    UsersControllerFindOne['response'],
    TError,
    TData,
    TQueryData
  >,
  'queryKey'
> {
  const queryKey = usersControllerFindOneQueryKey(idOrEmail);
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/users/${idOrEmail}`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/users/:idOrEmail */
export function useUsersControllerFindOne<
  TQueryFnData extends
    UsersControllerFindOne['data'] = UsersControllerFindOne['data'],
  TError = UsersControllerFindOne['error'],
  TData = UsersControllerFindOne['response'],
  TQueryData = UsersControllerFindOne['response'],
  TQueryKey extends QueryKey = UsersControllerFindOneQueryKey,
>(
  idOrEmail: UsersControllerFindOnePathParams['idOrEmail'],
  options: {
    query?: QueryObserverOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData,
      TQueryKey
    >;
    client?: UsersControllerFindOne['client']['paramaters'];
  } = {},
): UseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? usersControllerFindOneQueryKey(idOrEmail);
  const query = useQuery<any, TError, TData, any>({
    ...usersControllerFindOneQueryOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData
    >(idOrEmail, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const usersControllerFindOneSuspenseQueryKey = (
  idOrEmail: UsersControllerFindOnePathParams['idOrEmail'],
) =>
  [{ url: '/api/users/:idOrEmail', params: { idOrEmail: idOrEmail } }] as const;
export type UsersControllerFindOneSuspenseQueryKey = ReturnType<
  typeof usersControllerFindOneSuspenseQueryKey
>;
export function usersControllerFindOneSuspenseQueryOptions<
  TQueryFnData extends
    UsersControllerFindOne['data'] = UsersControllerFindOne['data'],
  TError = UsersControllerFindOne['error'],
  TData = UsersControllerFindOne['response'],
>(
  idOrEmail: UsersControllerFindOnePathParams['idOrEmail'],
  options: UsersControllerFindOne['client']['paramaters'] = {},
): WithRequired<
  UseSuspenseQueryOptions<UsersControllerFindOne['response'], TError, TData>,
  'queryKey'
> {
  const queryKey = usersControllerFindOneSuspenseQueryKey(idOrEmail);
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/users/${idOrEmail}`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/users/:idOrEmail */
export function useUsersControllerFindOneSuspense<
  TQueryFnData extends
    UsersControllerFindOne['data'] = UsersControllerFindOne['data'],
  TError = UsersControllerFindOne['error'],
  TData = UsersControllerFindOne['response'],
  TQueryKey extends QueryKey = UsersControllerFindOneSuspenseQueryKey,
>(
  idOrEmail: UsersControllerFindOnePathParams['idOrEmail'],
  options: {
    query?: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    client?: UsersControllerFindOne['client']['paramaters'];
  } = {},
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? usersControllerFindOneSuspenseQueryKey(idOrEmail);
  const query = useSuspenseQuery<any, TError, TData, any>({
    ...usersControllerFindOneSuspenseQueryOptions<TQueryFnData, TError, TData>(
      idOrEmail,
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
