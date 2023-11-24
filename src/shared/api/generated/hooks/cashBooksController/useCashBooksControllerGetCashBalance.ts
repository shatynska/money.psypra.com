import type {
  QueryKey,
  UseQueryResult,
  UseQueryOptions,
  QueryOptions,
} from '@tanstack/react-query';
import { useQuery, queryOptions } from '@tanstack/react-query';
import client from '../../../client';
import type { CashBooksControllerGetCashBalanceQueryResponse } from '../../models/cashBooksController/CashBooksControllerGetCashBalance';

export const cashBooksControllerGetCashBalanceQueryKey = () =>
  [{ url: `/api/cash-books/cash-balance` }] as const;
export function cashBooksControllerGetCashBalanceQueryOptions<
  TData = CashBooksControllerGetCashBalanceQueryResponse,
  TError = unknown,
>(
  options: Partial<Parameters<typeof client>[0]> = {},
): UseQueryOptions<TData, TError> {
  const queryKey = cashBooksControllerGetCashBalanceQueryKey();

  return queryOptions({
    queryKey: queryKey as QueryKey,
    queryFn: () => {
      return client<TData, TError>({
        method: 'get',
        url: `/api/cash-books/cash-balance`,

        ...options,
      }).then((res) => res.data);
    },
  });
}

/**
 * @link /api/cash-books/cash-balance
 */

export function useCashBooksControllerGetCashBalance<
  TData = CashBooksControllerGetCashBalanceQueryResponse,
  TError = unknown,
>(
  options: {
    query?: UseQueryOptions<TData, TError>;
    client?: Partial<Parameters<typeof client<TData, TError>>[0]>;
  } = {},
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? cashBooksControllerGetCashBalanceQueryKey();

  const query = useQuery<TData, TError>({
    ...cashBooksControllerGetCashBalanceQueryOptions<TData, TError>(
      clientOptions,
    ),
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
