import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions, UseInfiniteQueryOptions, UseInfiniteQueryResult } from "@tanstack/react-query";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import client from "../../../client";
import type { AuthControllerRefreshTokensQueryResponse } from "../../models/authController/AuthControllerRefreshTokens";

export const authControllerRefreshTokensQueryKey = () =>     [{url:`/api/auth/refresh-tokens`}] as const;
      export function authControllerRefreshTokensQueryOptions <TData = AuthControllerRefreshTokensQueryResponse, TError = unknown>(options: Partial<Parameters<typeof client>[0]> = {}): UseQueryOptions<TData, TError> {
        const queryKey = authControllerRefreshTokensQueryKey();

        return {
          queryKey,
          queryFn: () => {
            
            return client<TData, TError>({
              method: "get",
              url: `/api/auth/refresh-tokens`,
              
              
              ...options,
            }).then(res => res.data);
          },
        };
      }
      
/**
 * @link /api/auth/refresh-tokens
 */

export function useAuthControllerRefreshTokens <TData = AuthControllerRefreshTokensQueryResponse, TError = unknown>(options: {
          query?: UseQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? authControllerRefreshTokensQueryKey();

  const query = useQuery<TData, TError>({
    ...authControllerRefreshTokensQueryOptions<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}


export function authControllerRefreshTokensQueryOptionsInfinite <TData = AuthControllerRefreshTokensQueryResponse, TError = unknown>(options: Partial<Parameters<typeof client>[0]> = {}): UseInfiniteQueryOptions<TData, TError> {
  const queryKey = authControllerRefreshTokensQueryKey();

  return {
    queryKey,
    queryFn: ({ pageParam }) => {
      
      return client<TData, TError>({
        method: "get",
        url: `/api/auth/refresh-tokens`,
        
        ...options,
        
      }).then(res => res.data);
    },
  };
}
  
/**
 * @link /api/auth/refresh-tokens
 */

export function useAuthControllerRefreshTokensInfinite <TData = AuthControllerRefreshTokensQueryResponse, TError = unknown>(options: {
          query?: UseInfiniteQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? authControllerRefreshTokensQueryKey();

  const query = useInfiniteQuery<TData, TError>({
    ...authControllerRefreshTokensQueryOptionsInfinite<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
