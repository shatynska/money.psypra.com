import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions, UseInfiniteQueryOptions, UseInfiniteQueryResult } from "@tanstack/react-query";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import client from "../../../client";
import type { UsersControllerMeQueryResponse } from "../../models/usersController/UsersControllerMe";

export const usersControllerMeQueryKey = () =>     [{url:`/api/users`}] as const;
      export function usersControllerMeQueryOptions <TData = UsersControllerMeQueryResponse, TError = unknown>(options: Partial<Parameters<typeof client>[0]> = {}): UseQueryOptions<TData, TError> {
        const queryKey = usersControllerMeQueryKey();

        return {
          queryKey,
          queryFn: () => {
            
            return client<TData, TError>({
              method: "get",
              url: `/api/users`,
              
              
              ...options,
            }).then(res => res.data);
          },
        };
      }
      
/**
 * @link /api/users
 */

export function useUsersControllerMe <TData = UsersControllerMeQueryResponse, TError = unknown>(options: {
          query?: UseQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? usersControllerMeQueryKey();

  const query = useQuery<TData, TError>({
    ...usersControllerMeQueryOptions<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}


export function usersControllerMeQueryOptionsInfinite <TData = UsersControllerMeQueryResponse, TError = unknown>(options: Partial<Parameters<typeof client>[0]> = {}): UseInfiniteQueryOptions<TData, TError> {
  const queryKey = usersControllerMeQueryKey();

  return {
    queryKey,
    queryFn: ({ pageParam }) => {
      
      return client<TData, TError>({
        method: "get",
        url: `/api/users`,
        
        ...options,
        
      }).then(res => res.data);
    },
  };
}
  
/**
 * @link /api/users
 */

export function useUsersControllerMeInfinite <TData = UsersControllerMeQueryResponse, TError = unknown>(options: {
          query?: UseInfiniteQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? usersControllerMeQueryKey();

  const query = useInfiniteQuery<TData, TError>({
    ...usersControllerMeQueryOptionsInfinite<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
