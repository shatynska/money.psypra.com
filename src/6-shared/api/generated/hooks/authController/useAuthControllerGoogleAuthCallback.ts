import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions, UseInfiniteQueryOptions, UseInfiniteQueryResult } from "@tanstack/react-query";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import client from "../../../client";
import type { AuthControllerGoogleAuthCallbackQueryResponse } from "../../models/authController/AuthControllerGoogleAuthCallback";

export const authControllerGoogleAuthCallbackQueryKey = () =>     [{url:`/api/auth/google/callback`}] as const;
      export function authControllerGoogleAuthCallbackQueryOptions <TData = AuthControllerGoogleAuthCallbackQueryResponse, TError = unknown>(options: Partial<Parameters<typeof client>[0]> = {}): UseQueryOptions<TData, TError> {
        const queryKey = authControllerGoogleAuthCallbackQueryKey();

        return {
          queryKey,
          queryFn: () => {
            
            return client<TData, TError>({
              method: "get",
              url: `/api/auth/google/callback`,
              
              
              ...options,
            }).then(res => res.data);
          },
        };
      }
      
/**
 * @link /api/auth/google/callback
 */

export function useAuthControllerGoogleAuthCallback <TData = AuthControllerGoogleAuthCallbackQueryResponse, TError = unknown>(options: {
          query?: UseQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? authControllerGoogleAuthCallbackQueryKey();

  const query = useQuery<TData, TError>({
    ...authControllerGoogleAuthCallbackQueryOptions<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}


export function authControllerGoogleAuthCallbackQueryOptionsInfinite <TData = AuthControllerGoogleAuthCallbackQueryResponse, TError = unknown>(options: Partial<Parameters<typeof client>[0]> = {}): UseInfiniteQueryOptions<TData, TError> {
  const queryKey = authControllerGoogleAuthCallbackQueryKey();

  return {
    queryKey,
    queryFn: ({ pageParam }) => {
      
      return client<TData, TError>({
        method: "get",
        url: `/api/auth/google/callback`,
        
        ...options,
        
      }).then(res => res.data);
    },
  };
}
  
/**
 * @link /api/auth/google/callback
 */

export function useAuthControllerGoogleAuthCallbackInfinite <TData = AuthControllerGoogleAuthCallbackQueryResponse, TError = unknown>(options: {
          query?: UseInfiniteQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? authControllerGoogleAuthCallbackQueryKey();

  const query = useInfiniteQuery<TData, TError>({
    ...authControllerGoogleAuthCallbackQueryOptionsInfinite<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
