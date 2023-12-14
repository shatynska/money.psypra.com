import client from '../../../client';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type { CashBooksControllerGetCashBalanceQueryResponse } from '../../models/cashBooksController/CashBooksControllerGetCashBalance';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  WithRequired,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type CashBooksControllerGetCashBalanceClient = typeof client<
  CashBooksControllerGetCashBalanceQueryResponse,
  never,
  never
>;
type CashBooksControllerGetCashBalance = {
  data: CashBooksControllerGetCashBalanceQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CashBooksControllerGetCashBalanceQueryResponse;
  client: {
    paramaters: Partial<Parameters<CashBooksControllerGetCashBalanceClient>[0]>;
    return: Awaited<ReturnType<CashBooksControllerGetCashBalanceClient>>;
  };
};
export const cashBooksControllerGetCashBalanceQueryKey = () =>
  [{ url: '/api/cash-books/cash-balance' }] as const;
export type CashBooksControllerGetCashBalanceQueryKey = ReturnType<
  typeof cashBooksControllerGetCashBalanceQueryKey
>;
export function cashBooksControllerGetCashBalanceQueryOptions<
  TQueryFnData extends
    CashBooksControllerGetCashBalance['data'] = CashBooksControllerGetCashBalance['data'],
  TError = CashBooksControllerGetCashBalance['error'],
  TData = CashBooksControllerGetCashBalance['response'],
  TQueryData = CashBooksControllerGetCashBalance['response'],
>(
  options: CashBooksControllerGetCashBalance['client']['paramaters'] = {},
): WithRequired<
  QueryObserverOptions<
    CashBooksControllerGetCashBalance['response'],
    TError,
    TData,
    TQueryData
  >,
  'queryKey'
> {
  const queryKey = cashBooksControllerGetCashBalanceQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/cash-books/cash-balance`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/cash-books/cash-balance */
export function useCashBooksControllerGetCashBalance<
  TQueryFnData extends
    CashBooksControllerGetCashBalance['data'] = CashBooksControllerGetCashBalance['data'],
  TError = CashBooksControllerGetCashBalance['error'],
  TData = CashBooksControllerGetCashBalance['response'],
  TQueryData = CashBooksControllerGetCashBalance['response'],
  TQueryKey extends QueryKey = CashBooksControllerGetCashBalanceQueryKey,
>(
  options: {
    query?: QueryObserverOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData,
      TQueryKey
    >;
    client?: CashBooksControllerGetCashBalance['client']['paramaters'];
  } = {},
): UseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? cashBooksControllerGetCashBalanceQueryKey();
  const query = useQuery<any, TError, TData, any>({
    ...cashBooksControllerGetCashBalanceQueryOptions<
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
export const cashBooksControllerGetCashBalanceSuspenseQueryKey = () =>
  [{ url: '/api/cash-books/cash-balance' }] as const;
export type CashBooksControllerGetCashBalanceSuspenseQueryKey = ReturnType<
  typeof cashBooksControllerGetCashBalanceSuspenseQueryKey
>;
export function cashBooksControllerGetCashBalanceSuspenseQueryOptions<
  TQueryFnData extends
    CashBooksControllerGetCashBalance['data'] = CashBooksControllerGetCashBalance['data'],
  TError = CashBooksControllerGetCashBalance['error'],
  TData = CashBooksControllerGetCashBalance['response'],
>(
  options: CashBooksControllerGetCashBalance['client']['paramaters'] = {},
): WithRequired<
  UseSuspenseQueryOptions<
    CashBooksControllerGetCashBalance['response'],
    TError,
    TData
  >,
  'queryKey'
> {
  const queryKey = cashBooksControllerGetCashBalanceSuspenseQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/cash-books/cash-balance`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/cash-books/cash-balance */
export function useCashBooksControllerGetCashBalanceSuspense<
  TQueryFnData extends
    CashBooksControllerGetCashBalance['data'] = CashBooksControllerGetCashBalance['data'],
  TError = CashBooksControllerGetCashBalance['error'],
  TData = CashBooksControllerGetCashBalance['response'],
  TQueryKey extends
    QueryKey = CashBooksControllerGetCashBalanceSuspenseQueryKey,
>(
  options: {
    query?: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    client?: CashBooksControllerGetCashBalance['client']['paramaters'];
  } = {},
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    cashBooksControllerGetCashBalanceSuspenseQueryKey();
  const query = useSuspenseQuery<any, TError, TData, any>({
    ...cashBooksControllerGetCashBalanceSuspenseQueryOptions<
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
