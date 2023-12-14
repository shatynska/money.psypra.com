import client from '../../../client';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type { CashBooksControllerFindAllCashBooksQueryResponse } from '../../models/cashBooksController/CashBooksControllerFindAllCashBooks';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  WithRequired,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type CashBooksControllerFindAllCashBooksClient = typeof client<
  CashBooksControllerFindAllCashBooksQueryResponse,
  never,
  never
>;
type CashBooksControllerFindAllCashBooks = {
  data: CashBooksControllerFindAllCashBooksQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CashBooksControllerFindAllCashBooksQueryResponse;
  client: {
    paramaters: Partial<
      Parameters<CashBooksControllerFindAllCashBooksClient>[0]
    >;
    return: Awaited<ReturnType<CashBooksControllerFindAllCashBooksClient>>;
  };
};
export const cashBooksControllerFindAllCashBooksQueryKey = () =>
  [{ url: '/api/cash-books' }] as const;
export type CashBooksControllerFindAllCashBooksQueryKey = ReturnType<
  typeof cashBooksControllerFindAllCashBooksQueryKey
>;
export function cashBooksControllerFindAllCashBooksQueryOptions<
  TQueryFnData extends
    CashBooksControllerFindAllCashBooks['data'] = CashBooksControllerFindAllCashBooks['data'],
  TError = CashBooksControllerFindAllCashBooks['error'],
  TData = CashBooksControllerFindAllCashBooks['response'],
  TQueryData = CashBooksControllerFindAllCashBooks['response'],
>(
  options: CashBooksControllerFindAllCashBooks['client']['paramaters'] = {},
): WithRequired<
  QueryObserverOptions<
    CashBooksControllerFindAllCashBooks['response'],
    TError,
    TData,
    TQueryData
  >,
  'queryKey'
> {
  const queryKey = cashBooksControllerFindAllCashBooksQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/cash-books`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/cash-books */
export function useCashBooksControllerFindAllCashBooks<
  TQueryFnData extends
    CashBooksControllerFindAllCashBooks['data'] = CashBooksControllerFindAllCashBooks['data'],
  TError = CashBooksControllerFindAllCashBooks['error'],
  TData = CashBooksControllerFindAllCashBooks['response'],
  TQueryData = CashBooksControllerFindAllCashBooks['response'],
  TQueryKey extends QueryKey = CashBooksControllerFindAllCashBooksQueryKey,
>(
  options: {
    query?: QueryObserverOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData,
      TQueryKey
    >;
    client?: CashBooksControllerFindAllCashBooks['client']['paramaters'];
  } = {},
): UseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? cashBooksControllerFindAllCashBooksQueryKey();
  const query = useQuery<any, TError, TData, any>({
    ...cashBooksControllerFindAllCashBooksQueryOptions<
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
export const cashBooksControllerFindAllCashBooksSuspenseQueryKey = () =>
  [{ url: '/api/cash-books' }] as const;
export type CashBooksControllerFindAllCashBooksSuspenseQueryKey = ReturnType<
  typeof cashBooksControllerFindAllCashBooksSuspenseQueryKey
>;
export function cashBooksControllerFindAllCashBooksSuspenseQueryOptions<
  TQueryFnData extends
    CashBooksControllerFindAllCashBooks['data'] = CashBooksControllerFindAllCashBooks['data'],
  TError = CashBooksControllerFindAllCashBooks['error'],
  TData = CashBooksControllerFindAllCashBooks['response'],
>(
  options: CashBooksControllerFindAllCashBooks['client']['paramaters'] = {},
): WithRequired<
  UseSuspenseQueryOptions<
    CashBooksControllerFindAllCashBooks['response'],
    TError,
    TData
  >,
  'queryKey'
> {
  const queryKey = cashBooksControllerFindAllCashBooksSuspenseQueryKey();
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/cash-books`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/cash-books */
export function useCashBooksControllerFindAllCashBooksSuspense<
  TQueryFnData extends
    CashBooksControllerFindAllCashBooks['data'] = CashBooksControllerFindAllCashBooks['data'],
  TError = CashBooksControllerFindAllCashBooks['error'],
  TData = CashBooksControllerFindAllCashBooks['response'],
  TQueryKey extends
    QueryKey = CashBooksControllerFindAllCashBooksSuspenseQueryKey,
>(
  options: {
    query?: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    client?: CashBooksControllerFindAllCashBooks['client']['paramaters'];
  } = {},
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    cashBooksControllerFindAllCashBooksSuspenseQueryKey();
  const query = useSuspenseQuery<any, TError, TData, any>({
    ...cashBooksControllerFindAllCashBooksSuspenseQueryOptions<
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
