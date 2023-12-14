import client from '../../../client';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type { CashBooksControllerGetCurrentCashBooksQueryResponse } from '../../models/cashBooksController/CashBooksControllerGetCurrentCashBooks';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  WithRequired,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type CashBooksControllerGetCurrentCashBooksClient = typeof client<
  CashBooksControllerGetCurrentCashBooksQueryResponse,
  never,
  never
>;
type CashBooksControllerGetCurrentCashBooks = {
  data: CashBooksControllerGetCurrentCashBooksQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CashBooksControllerGetCurrentCashBooksQueryResponse;
  client: {
    paramaters: Partial<
      Parameters<CashBooksControllerGetCurrentCashBooksClient>[0]
    >;
    return: Awaited<ReturnType<CashBooksControllerGetCurrentCashBooksClient>>;
  };
};
export const cashBooksControllerGetCurrentCashBooksQueryKey = () =>
  [{ url: '/api/cash-books/current' }] as const;
export type CashBooksControllerGetCurrentCashBooksQueryKey = ReturnType<
  typeof cashBooksControllerGetCurrentCashBooksQueryKey
>;
export function cashBooksControllerGetCurrentCashBooksQueryOptions<
  TQueryFnData extends
    CashBooksControllerGetCurrentCashBooks['data'] = CashBooksControllerGetCurrentCashBooks['data'],
  TError = CashBooksControllerGetCurrentCashBooks['error'],
  TData = CashBooksControllerGetCurrentCashBooks['response'],
  TQueryData = CashBooksControllerGetCurrentCashBooks['response'],
>(
  options: CashBooksControllerGetCurrentCashBooks['client']['paramaters'] = {},
): WithRequired<
  QueryObserverOptions<
    CashBooksControllerGetCurrentCashBooks['response'],
    TError,
    TData,
    TQueryData
  >,
  'queryKey'
> {
  const queryKey = cashBooksControllerGetCurrentCashBooksQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/cash-books/current`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/cash-books/current */
export function useCashBooksControllerGetCurrentCashBooks<
  TQueryFnData extends
    CashBooksControllerGetCurrentCashBooks['data'] = CashBooksControllerGetCurrentCashBooks['data'],
  TError = CashBooksControllerGetCurrentCashBooks['error'],
  TData = CashBooksControllerGetCurrentCashBooks['response'],
  TQueryData = CashBooksControllerGetCurrentCashBooks['response'],
  TQueryKey extends QueryKey = CashBooksControllerGetCurrentCashBooksQueryKey,
>(
  options: {
    query?: QueryObserverOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData,
      TQueryKey
    >;
    client?: CashBooksControllerGetCurrentCashBooks['client']['paramaters'];
  } = {},
): UseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? cashBooksControllerGetCurrentCashBooksQueryKey();
  const query = useQuery<any, TError, TData, any>({
    ...cashBooksControllerGetCurrentCashBooksQueryOptions<
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
export const cashBooksControllerGetCurrentCashBooksSuspenseQueryKey = () =>
  [{ url: '/api/cash-books/current' }] as const;
export type CashBooksControllerGetCurrentCashBooksSuspenseQueryKey = ReturnType<
  typeof cashBooksControllerGetCurrentCashBooksSuspenseQueryKey
>;
export function cashBooksControllerGetCurrentCashBooksSuspenseQueryOptions<
  TQueryFnData extends
    CashBooksControllerGetCurrentCashBooks['data'] = CashBooksControllerGetCurrentCashBooks['data'],
  TError = CashBooksControllerGetCurrentCashBooks['error'],
  TData = CashBooksControllerGetCurrentCashBooks['response'],
>(
  options: CashBooksControllerGetCurrentCashBooks['client']['paramaters'] = {},
): WithRequired<
  UseSuspenseQueryOptions<
    CashBooksControllerGetCurrentCashBooks['response'],
    TError,
    TData
  >,
  'queryKey'
> {
  const queryKey = cashBooksControllerGetCurrentCashBooksSuspenseQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/cash-books/current`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/cash-books/current */
export function useCashBooksControllerGetCurrentCashBooksSuspense<
  TQueryFnData extends
    CashBooksControllerGetCurrentCashBooks['data'] = CashBooksControllerGetCurrentCashBooks['data'],
  TError = CashBooksControllerGetCurrentCashBooks['error'],
  TData = CashBooksControllerGetCurrentCashBooks['response'],
  TQueryKey extends
    QueryKey = CashBooksControllerGetCurrentCashBooksSuspenseQueryKey,
>(
  options: {
    query?: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    client?: CashBooksControllerGetCurrentCashBooks['client']['paramaters'];
  } = {},
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    cashBooksControllerGetCurrentCashBooksSuspenseQueryKey();
  const query = useSuspenseQuery<any, TError, TData, any>({
    ...cashBooksControllerGetCurrentCashBooksSuspenseQueryOptions<
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
