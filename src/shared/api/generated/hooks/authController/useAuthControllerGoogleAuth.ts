import type { QueryKey, UseInfiniteQueryOptions, UseInfiniteQueryResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import client from "../../../client";
import type { AuthControllerGoogleAuthQueryResponse } from "../../models/authController/AuthControllerGoogleAuth";

export const authControllerGoogleAuthQueryKey = () =>     [{url:`/api/auth/google`}] as const;
      export function authControllerGoogleAuthQueryOptions <TData = AuthControllerGoogleAuthQueryResponse, TError = unknown>(options: Partial<Parameters<typeof client>[0]> = {}): UseQueryOptions<TData, TError> {
        const queryKey = authControllerGoogleAuthQueryKey();

        return {
          queryKey,
          queryFn: () => {
            
            return client<TData, TError>({
              method: "get",
              url: `/api/auth/google`,
              
              
              ...options,
            }).then(res => res.data);
          },
        };
      }
      
/**
 * @link /api/auth/google
 */

export function useAuthControllerGoogleAuth <TData = AuthControllerGoogleAuthQueryResponse, TError = unknown>(options: {
          query?: UseQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? authControllerGoogleAuthQueryKey();

  const query = useQuery<TData, TError>({
    ...authControllerGoogleAuthQueryOptions<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}


export function authControllerGoogleAuthQueryOptionsInfinite <TData = AuthControllerGoogleAuthQueryResponse, TError = unknown>(options: Partial<Parameters<typeof client>[0]> = {}): UseInfiniteQueryOptions<TData, TError> {
  const queryKey = authControllerGoogleAuthQueryKey();

  return {
    queryKey,
    queryFn: ({ pageParam }) => {
      
      return client<TData, TError>({
        method: "get",
        url: `/api/auth/google`,
        
        ...options,
        
      }).then(res => res.data);
    },
  };
}
  
/**
 * @link /api/auth/google
 */

export function useAuthControllerGoogleAuthInfinite <TData = AuthControllerGoogleAuthQueryResponse, TError = unknown>(options: {
          query?: UseInfiniteQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? authControllerGoogleAuthQueryKey();

  const query = useInfiniteQuery<TData, TError>({
    ...authControllerGoogleAuthQueryOptionsInfinite<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
