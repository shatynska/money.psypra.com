import client from '../../../client';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type { UsersControllerMeQueryResponse } from '../../models/usersController/UsersControllerMe';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  WithRequired,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type UsersControllerMeClient = typeof client<
  UsersControllerMeQueryResponse,
  never,
  never
>;
type UsersControllerMe = {
  data: UsersControllerMeQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: UsersControllerMeQueryResponse;
  client: {
    paramaters: Partial<Parameters<UsersControllerMeClient>[0]>;
    return: Awaited<ReturnType<UsersControllerMeClient>>;
  };
};
export const usersControllerMeQueryKey = () => [{ url: '/api/users' }] as const;
export type UsersControllerMeQueryKey = ReturnType<
  typeof usersControllerMeQueryKey
>;
export function usersControllerMeQueryOptions<
  TQueryFnData extends UsersControllerMe['data'] = UsersControllerMe['data'],
  TError = UsersControllerMe['error'],
  TData = UsersControllerMe['response'],
  TQueryData = UsersControllerMe['response'],
>(
  options: UsersControllerMe['client']['paramaters'] = {},
): WithRequired<
  QueryObserverOptions<
    UsersControllerMe['response'],
    TError,
    TData,
    TQueryData
  >,
  'queryKey'
> {
  const queryKey = usersControllerMeQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/users`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/users */
export function useUsersControllerMe<
  TQueryFnData extends UsersControllerMe['data'] = UsersControllerMe['data'],
  TError = UsersControllerMe['error'],
  TData = UsersControllerMe['response'],
  TQueryData = UsersControllerMe['response'],
  TQueryKey extends QueryKey = UsersControllerMeQueryKey,
>(
  options: {
    query?: QueryObserverOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData,
      TQueryKey
    >;
    client?: UsersControllerMe['client']['paramaters'];
  } = {},
): UseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? usersControllerMeQueryKey();
  const query = useQuery<any, TError, TData, any>({
    ...usersControllerMeQueryOptions<TQueryFnData, TError, TData, TQueryData>(
      clientOptions,
    ),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const usersControllerMeSuspenseQueryKey = () =>
  [{ url: '/api/users' }] as const;
export type UsersControllerMeSuspenseQueryKey = ReturnType<
  typeof usersControllerMeSuspenseQueryKey
>;
export function usersControllerMeSuspenseQueryOptions<
  TQueryFnData extends UsersControllerMe['data'] = UsersControllerMe['data'],
  TError = UsersControllerMe['error'],
  TData = UsersControllerMe['response'],
>(
  options: UsersControllerMe['client']['paramaters'] = {},
): WithRequired<
  UseSuspenseQueryOptions<UsersControllerMe['response'], TError, TData>,
  'queryKey'
> {
  const queryKey = usersControllerMeSuspenseQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/users`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/users */
export function useUsersControllerMeSuspense<
  TQueryFnData extends UsersControllerMe['data'] = UsersControllerMe['data'],
  TError = UsersControllerMe['error'],
  TData = UsersControllerMe['response'],
  TQueryKey extends QueryKey = UsersControllerMeSuspenseQueryKey,
>(
  options: {
    query?: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    client?: UsersControllerMe['client']['paramaters'];
  } = {},
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? usersControllerMeSuspenseQueryKey();
  const query = useSuspenseQuery<any, TError, TData, any>({
    ...usersControllerMeSuspenseQueryOptions<TQueryFnData, TError, TData>(
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
