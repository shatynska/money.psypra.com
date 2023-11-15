import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { AuthControllerLoginMutationRequest, AuthControllerLoginMutationResponse, AuthControllerLogin201, AuthControllerLogin400, AuthControllerLogin401 } from "../../models/authController/AuthControllerLogin";

/**
 * @summary Login user
 * @link /api/auth/login
 */

export function useAuthControllerLogin <TData = AuthControllerLoginMutationResponse, TError = AuthControllerLogin201 | AuthControllerLogin400 | AuthControllerLogin401, TVariables = AuthControllerLoginMutationRequest>(options: {
          mutation?: UseMutationOptions<ResponseConfig<TData>, TError, TVariables>,
          client?: Partial<Parameters<typeof client<TData, TError, TVariables>>[0]>,
      } = {}): UseMutationResult<ResponseConfig<TData>, TError, TVariables> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};

  return useMutation<ResponseConfig<TData>, TError, TVariables>({
    mutationFn: (data) => {
      
      return client<TData, TError, TVariables>({
        method: "post",
        url: `/api/auth/login`,
        data,
        
        
        ...clientOptions
      });
    },
    ...mutationOptions
  });
}
