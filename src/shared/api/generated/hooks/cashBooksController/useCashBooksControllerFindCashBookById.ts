import client from '../../../client';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type {
  CashBooksControllerFindCashBookByIdQueryResponse,
  CashBooksControllerFindCashBookByIdPathParams,
} from '../../models/cashBooksController/CashBooksControllerFindCashBookById';
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  WithRequired,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

type CashBooksControllerFindCashBookByIdClient = typeof client<
  CashBooksControllerFindCashBookByIdQueryResponse,
  never,
  never
>;
type CashBooksControllerFindCashBookById = {
  data: CashBooksControllerFindCashBookByIdQueryResponse;
  error: never;
  request: never;
  pathParams: CashBooksControllerFindCashBookByIdPathParams;
  queryParams: never;
  headerParams: never;
  response: CashBooksControllerFindCashBookByIdQueryResponse;
  client: {
    paramaters: Partial<
      Parameters<CashBooksControllerFindCashBookByIdClient>[0]
    >;
    return: Awaited<ReturnType<CashBooksControllerFindCashBookByIdClient>>;
  };
};
export const cashBooksControllerFindCashBookByIdQueryKey = (
  id: CashBooksControllerFindCashBookByIdPathParams['id'],
) => [{ url: '/api/cash-books/:id', params: { id: id } }] as const;
export type CashBooksControllerFindCashBookByIdQueryKey = ReturnType<
  typeof cashBooksControllerFindCashBookByIdQueryKey
>;
export function cashBooksControllerFindCashBookByIdQueryOptions<
  TQueryFnData extends
    CashBooksControllerFindCashBookById['data'] = CashBooksControllerFindCashBookById['data'],
  TError = CashBooksControllerFindCashBookById['error'],
  TData = CashBooksControllerFindCashBookById['response'],
  TQueryData = CashBooksControllerFindCashBookById['response'],
>(
  id: CashBooksControllerFindCashBookByIdPathParams['id'],
  options: CashBooksControllerFindCashBookById['client']['paramaters'] = {},
): WithRequired<
  QueryObserverOptions<
    CashBooksControllerFindCashBookById['response'],
    TError,
    TData,
    TQueryData
  >,
  'queryKey'
> {
  const queryKey = cashBooksControllerFindCashBookByIdQueryKey(id);
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/cash-books/${id}`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/cash-books/:id */
export function useCashBooksControllerFindCashBookById<
  TQueryFnData extends
    CashBooksControllerFindCashBookById['data'] = CashBooksControllerFindCashBookById['data'],
  TError = CashBooksControllerFindCashBookById['error'],
  TData = CashBooksControllerFindCashBookById['response'],
  TQueryData = CashBooksControllerFindCashBookById['response'],
  TQueryKey extends QueryKey = CashBooksControllerFindCashBookByIdQueryKey,
>(
  id: CashBooksControllerFindCashBookByIdPathParams['id'],
  options: {
    query?: QueryObserverOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData,
      TQueryKey
    >;
    client?: CashBooksControllerFindCashBookById['client']['paramaters'];
  } = {},
): UseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? cashBooksControllerFindCashBookByIdQueryKey(id);
  const query = useQuery<any, TError, TData, any>({
    ...cashBooksControllerFindCashBookByIdQueryOptions<
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
export const cashBooksControllerFindCashBookByIdSuspenseQueryKey = (
  id: CashBooksControllerFindCashBookByIdPathParams['id'],
) => [{ url: '/api/cash-books/:id', params: { id: id } }] as const;
export type CashBooksControllerFindCashBookByIdSuspenseQueryKey = ReturnType<
  typeof cashBooksControllerFindCashBookByIdSuspenseQueryKey
>;
export function cashBooksControllerFindCashBookByIdSuspenseQueryOptions<
  TQueryFnData extends
    CashBooksControllerFindCashBookById['data'] = CashBooksControllerFindCashBookById['data'],
  TError = CashBooksControllerFindCashBookById['error'],
  TData = CashBooksControllerFindCashBookById['response'],
>(
  id: CashBooksControllerFindCashBookByIdPathParams['id'],
  options: CashBooksControllerFindCashBookById['client']['paramaters'] = {},
): WithRequired<
  UseSuspenseQueryOptions<
    CashBooksControllerFindCashBookById['response'],
    TError,
    TData
  >,
  'queryKey'
> {
  const queryKey = cashBooksControllerFindCashBookByIdSuspenseQueryKey(id);
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<TQueryFnData, TError>({
        method: 'get',
        url: `/api/cash-books/${id}`,
        ...options,
      });
      return res.data;
    },
  };
}
/**
 * @link /api/cash-books/:id */
export function useCashBooksControllerFindCashBookByIdSuspense<
  TQueryFnData extends
    CashBooksControllerFindCashBookById['data'] = CashBooksControllerFindCashBookById['data'],
  TError = CashBooksControllerFindCashBookById['error'],
  TData = CashBooksControllerFindCashBookById['response'],
  TQueryKey extends
    QueryKey = CashBooksControllerFindCashBookByIdSuspenseQueryKey,
>(
  id: CashBooksControllerFindCashBookByIdPathParams['id'],
  options: {
    query?: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    client?: CashBooksControllerFindCashBookById['client']['paramaters'];
  } = {},
): UseSuspenseQueryResult<TData, TError> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    cashBooksControllerFindCashBookByIdSuspenseQueryKey(id);
  const query = useSuspenseQuery<any, TError, TData, any>({
    ...cashBooksControllerFindCashBookByIdSuspenseQueryOptions<
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
