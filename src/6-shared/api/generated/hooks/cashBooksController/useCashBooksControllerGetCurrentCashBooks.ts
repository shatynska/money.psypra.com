import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions, UseInfiniteQueryOptions, UseInfiniteQueryResult } from "@tanstack/react-query";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import client from "../../../client";
import type { CashBooksControllerGetCurrentCashBooksQueryResponse } from "../../models/cashBooksController/CashBooksControllerGetCurrentCashBooks";

export const cashBooksControllerGetCurrentCashBooksQueryKey = () =>     [{url:`/api/cash-books/current`}] as const;
      export function cashBooksControllerGetCurrentCashBooksQueryOptions <TData = CashBooksControllerGetCurrentCashBooksQueryResponse, TError = unknown>(options: Partial<Parameters<typeof client>[0]> = {}): UseQueryOptions<TData, TError> {
        const queryKey = cashBooksControllerGetCurrentCashBooksQueryKey();

        return {
          queryKey,
          queryFn: () => {
            
            return client<TData, TError>({
              method: "get",
              url: `/api/cash-books/current`,
              
              
              ...options,
            }).then(res => res.data);
          },
        };
      }
      
/**
 * @link /api/cash-books/current
 */

export function useCashBooksControllerGetCurrentCashBooks <TData = CashBooksControllerGetCurrentCashBooksQueryResponse, TError = unknown>(options: {
          query?: UseQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? cashBooksControllerGetCurrentCashBooksQueryKey();

  const query = useQuery<TData, TError>({
    ...cashBooksControllerGetCurrentCashBooksQueryOptions<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}


export function cashBooksControllerGetCurrentCashBooksQueryOptionsInfinite <TData = CashBooksControllerGetCurrentCashBooksQueryResponse, TError = unknown>(options: Partial<Parameters<typeof client>[0]> = {}): UseInfiniteQueryOptions<TData, TError> {
  const queryKey = cashBooksControllerGetCurrentCashBooksQueryKey();

  return {
    queryKey,
    queryFn: ({ pageParam }) => {
      
      return client<TData, TError>({
        method: "get",
        url: `/api/cash-books/current`,
        
        ...options,
        
      }).then(res => res.data);
    },
  };
}
  
/**
 * @link /api/cash-books/current
 */

export function useCashBooksControllerGetCurrentCashBooksInfinite <TData = CashBooksControllerGetCurrentCashBooksQueryResponse, TError = unknown>(options: {
          query?: UseInfiniteQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? cashBooksControllerGetCurrentCashBooksQueryKey();

  const query = useInfiniteQuery<TData, TError>({
    ...cashBooksControllerGetCurrentCashBooksQueryOptionsInfinite<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}