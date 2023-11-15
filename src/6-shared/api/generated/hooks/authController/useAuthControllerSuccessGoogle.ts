import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions, UseInfiniteQueryOptions, UseInfiniteQueryResult } from "@tanstack/react-query";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import client from "../../../client";
import type { AuthControllerSuccessGoogleQueryResponse, AuthControllerSuccessGoogleQueryParams } from "../../models/authController/AuthControllerSuccessGoogle";

export const authControllerSuccessGoogleQueryKey = (params: AuthControllerSuccessGoogleQueryParams) =>     [{url:`/api/auth/success-google`},...(params ? [params] : [])] as const;
      export function authControllerSuccessGoogleQueryOptions <TData = AuthControllerSuccessGoogleQueryResponse, TError = unknown>(params: AuthControllerSuccessGoogleQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): UseQueryOptions<TData, TError> {
        const queryKey = authControllerSuccessGoogleQueryKey(params);

        return {
          queryKey,
          queryFn: () => {
            
            return client<TData, TError>({
              method: "get",
              url: `/api/auth/success-google`,
              params,
              
              ...options,
            }).then(res => res.data);
          },
        };
      }
      
/**
 * @link /api/auth/success-google
 */

export function useAuthControllerSuccessGoogle <TData = AuthControllerSuccessGoogleQueryResponse, TError = unknown>(params: AuthControllerSuccessGoogleQueryParams, options: {
          query?: UseQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? authControllerSuccessGoogleQueryKey(params);

  const query = useQuery<TData, TError>({
    ...authControllerSuccessGoogleQueryOptions<TData, TError>(params, clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}


export function authControllerSuccessGoogleQueryOptionsInfinite <TData = AuthControllerSuccessGoogleQueryResponse, TError = unknown>(params: AuthControllerSuccessGoogleQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): UseInfiniteQueryOptions<TData, TError> {
  const queryKey = authControllerSuccessGoogleQueryKey(params);

  return {
    queryKey,
    queryFn: ({ pageParam }) => {
      
      return client<TData, TError>({
        method: "get",
        url: `/api/auth/success-google`,
        
        ...options,
        params: {
          ...params,
          ['id']: pageParam,
          ...(options.params || {}),
        }
      }).then(res => res.data);
    },
  };
}
  
/**
 * @link /api/auth/success-google
 */

export function useAuthControllerSuccessGoogleInfinite <TData = AuthControllerSuccessGoogleQueryResponse, TError = unknown>(params: AuthControllerSuccessGoogleQueryParams, options: {
          query?: UseInfiniteQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? authControllerSuccessGoogleQueryKey(params);

  const query = useInfiniteQuery<TData, TError>({
    ...authControllerSuccessGoogleQueryOptionsInfinite<TData, TError>(params, clientOptions),
    ...queryOptions
  }) as UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
