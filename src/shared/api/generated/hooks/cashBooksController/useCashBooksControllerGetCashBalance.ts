import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions, UseInfiniteQueryOptions, UseInfiniteQueryResult } from "@tanstack/react-query";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import client from "../../../client";
import type { CashBooksControllerGetCashBalanceQueryResponse } from "../../models/cashBooksController/CashBooksControllerGetCashBalance";

export const cashBooksControllerGetCashBalanceQueryKey = () =>     [{url:`/api/cash-books/cash-balance`}] as const;
      export function cashBooksControllerGetCashBalanceQueryOptions <TData = CashBooksControllerGetCashBalanceQueryResponse, TError = unknown>(options: Partial<Parameters<typeof client>[0]> = {}): UseQueryOptions<TData, TError> {
        const queryKey = cashBooksControllerGetCashBalanceQueryKey();

        return {
          queryKey,
          queryFn: () => {
            
            return client<TData, TError>({
              method: "get",
              url: `/api/cash-books/cash-balance`,
              
              
              ...options,
            }).then(res => res.data);
          },
        };
      }
      
/**
 * @link /api/cash-books/cash-balance
 */

export function useCashBooksControllerGetCashBalance <TData = CashBooksControllerGetCashBalanceQueryResponse, TError = unknown>(options: {
          query?: UseQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? cashBooksControllerGetCashBalanceQueryKey();

  const query = useQuery<TData, TError>({
    ...cashBooksControllerGetCashBalanceQueryOptions<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}


export function cashBooksControllerGetCashBalanceQueryOptionsInfinite <TData = CashBooksControllerGetCashBalanceQueryResponse, TError = unknown>(options: Partial<Parameters<typeof client>[0]> = {}): UseInfiniteQueryOptions<TData, TError> {
  const queryKey = cashBooksControllerGetCashBalanceQueryKey();

  return {
    queryKey,
    queryFn: ({ pageParam }) => {
      
      return client<TData, TError>({
        method: "get",
        url: `/api/cash-books/cash-balance`,
        
        ...options,
        
      }).then(res => res.data);
    },
  };
}
  
/**
 * @link /api/cash-books/cash-balance
 */

export function useCashBooksControllerGetCashBalanceInfinite <TData = CashBooksControllerGetCashBalanceQueryResponse, TError = unknown>(options: {
          query?: UseInfiniteQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? cashBooksControllerGetCashBalanceQueryKey();

  const query = useInfiniteQuery<TData, TError>({
    ...cashBooksControllerGetCashBalanceQueryOptionsInfinite<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
