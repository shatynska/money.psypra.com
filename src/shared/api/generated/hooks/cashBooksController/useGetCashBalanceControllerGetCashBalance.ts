import client from '../../../client';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type {
  GetCashBalanceControllerGetCashBalanceQueryResponse,
  GetCashBalanceControllerGetCashBalancePathParams,
  GetCashBalanceControllerGetCashBalance404,
} from '../../models/cashBooksController/GetCashBalanceControllerGetCashBalance';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  WithRequired,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type GetCashBalanceControllerGetCashBalanceClient = typeof client<
  GetCashBalanceControllerGetCashBalanceQueryResponse,
  GetCashBalanceControllerGetCashBalance404,
  never
>;
type GetCashBalanceControllerGetCashBalance = {
  data: GetCashBalanceControllerGetCashBalanceQueryResponse;
  error: GetCashBalanceControllerGetCashBalance404;
  request: never;
  pathParams: GetCashBalanceControllerGetCashBalancePathParams;
  queryParams: never;
  headerParams: never;
  response: GetCashBalanceControllerGetCashBalanceQueryResponse;
  client: {
    paramaters: Partial<
      Parameters<GetCashBalanceControllerGetCashBalanceClient>[0]
    >;
    return: Awaited<ReturnType<GetCashBalanceControllerGetCashBalanceClient>>;
  };
};
export const getCashBalanceControllerGetCashBalanceQueryKey = (
  id: GetCashBalanceControllerGetCashBalancePathParams['id'],
) => [{ url: '/api/cash-books/:id/cash-balance', params: { id: id } }] as const;
export type GetCashBalanceControllerGetCashBalanceQueryKey = ReturnType<
  typeof getCashBalanceControllerGetCashBalanceQueryKey
>;
export function getCashBalanceControllerGetCashBalanceQueryOptions<
  TQueryFnData extends
    GetCashBalanceControllerGetCashBalance['data'] = GetCashBalanceControllerGetCashBalance['data'],
  TError = GetCashBalanceControllerGetCashBalance['error'],
  TData = GetCashBalanceControllerGetCashBalance['response'],
  TQueryData = GetCashBalanceControllerGetCashBalance['response'],
>(
  id: GetCashBalanceControllerGetCashBalancePathParams['id'],
  options: GetCashBalanceControllerGetCashBalance['client']['paramaters'] = {},
): WithRequired<
  QueryObserverOptions<
    GetCashBalanceControllerGetCashBalance['response'],
    TError,
    TData,
    TQueryData
  >,
  'queryKey'
> {
  const queryKey = getCashBalanceControllerGetCashBalanceQueryKey(id);
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/cash-books/${id}/cash-balance`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/cash-books/:id/cash-balance */
export function useGetCashBalanceControllerGetCashBalance<
  TQueryFnData extends
    GetCashBalanceControllerGetCashBalance['data'] = GetCashBalanceControllerGetCashBalance['data'],
  TError = GetCashBalanceControllerGetCashBalance['error'],
  TData = GetCashBalanceControllerGetCashBalance['response'],
  TQueryData = GetCashBalanceControllerGetCashBalance['response'],
  TQueryKey extends QueryKey = GetCashBalanceControllerGetCashBalanceQueryKey,
>(
  id: GetCashBalanceControllerGetCashBalancePathParams['id'],
  options: {
    query?: QueryObserverOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData,
      TQueryKey
    >;
    client?: GetCashBalanceControllerGetCashBalance['client']['paramaters'];
  } = {},
): UseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    getCashBalanceControllerGetCashBalanceQueryKey(id);
  const query = useQuery<any, TError, TData, any>({
    ...getCashBalanceControllerGetCashBalanceQueryOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData
    >(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const getCashBalanceControllerGetCashBalanceSuspenseQueryKey = (
  id: GetCashBalanceControllerGetCashBalancePathParams['id'],
) => [{ url: '/api/cash-books/:id/cash-balance', params: { id: id } }] as const;
export type GetCashBalanceControllerGetCashBalanceSuspenseQueryKey = ReturnType<
  typeof getCashBalanceControllerGetCashBalanceSuspenseQueryKey
>;
export function getCashBalanceControllerGetCashBalanceSuspenseQueryOptions<
  TQueryFnData extends
    GetCashBalanceControllerGetCashBalance['data'] = GetCashBalanceControllerGetCashBalance['data'],
  TError = GetCashBalanceControllerGetCashBalance['error'],
  TData = GetCashBalanceControllerGetCashBalance['response'],
>(
  id: GetCashBalanceControllerGetCashBalancePathParams['id'],
  options: GetCashBalanceControllerGetCashBalance['client']['paramaters'] = {},
): WithRequired<
  UseSuspenseQueryOptions<
    GetCashBalanceControllerGetCashBalance['response'],
    TError,
    TData
  >,
  'queryKey'
> {
  const queryKey = getCashBalanceControllerGetCashBalanceSuspenseQueryKey(id);
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/cash-books/${id}/cash-balance`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/cash-books/:id/cash-balance */
export function useGetCashBalanceControllerGetCashBalanceSuspense<
  TQueryFnData extends
    GetCashBalanceControllerGetCashBalance['data'] = GetCashBalanceControllerGetCashBalance['data'],
  TError = GetCashBalanceControllerGetCashBalance['error'],
  TData = GetCashBalanceControllerGetCashBalance['response'],
  TQueryKey extends
    QueryKey = GetCashBalanceControllerGetCashBalanceSuspenseQueryKey,
>(
  id: GetCashBalanceControllerGetCashBalancePathParams['id'],
  options: {
    query?: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    client?: GetCashBalanceControllerGetCashBalance['client']['paramaters'];
  } = {},
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    getCashBalanceControllerGetCashBalanceSuspenseQueryKey(id);
  const query = useSuspenseQuery<any, TError, TData, any>({
    ...getCashBalanceControllerGetCashBalanceSuspenseQueryOptions<
      TQueryFnData,
      TError,
      TData
    >(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
