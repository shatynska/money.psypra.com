import client from '../../../client';
import { useMutation } from '@tanstack/react-query';
import type {
  CreateCashBookControllerExecuteMutationRequest,
  CreateCashBookControllerExecuteMutationResponse,
  CreateCashBookControllerExecute201,
  CreateCashBookControllerExecute400,
} from '../../models/cashBooksController/CreateCashBookControllerExecute';
import type {
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

type CreateCashBookControllerExecuteClient = typeof client<
  CreateCashBookControllerExecuteMutationResponse,
  CreateCashBookControllerExecute201 | CreateCashBookControllerExecute400,
  CreateCashBookControllerExecuteMutationRequest
>;
type CreateCashBookControllerExecute = {
  data: CreateCashBookControllerExecuteMutationResponse;
  error:
    | CreateCashBookControllerExecute201
    | CreateCashBookControllerExecute400;
  request: CreateCashBookControllerExecuteMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CreateCashBookControllerExecuteMutationResponse;
  client: {
    paramaters: Partial<Parameters<CreateCashBookControllerExecuteClient>[0]>;
    return: Awaited<ReturnType<CreateCashBookControllerExecuteClient>>;
  };
};
/**
 * @link /api/cash-books */
export function useCreateCashBookControllerExecute(
  options: {
    mutation?: UseMutationOptions<
      CreateCashBookControllerExecute['response'],
      CreateCashBookControllerExecute['error'],
      CreateCashBookControllerExecute['request']
    >;
    client?: CreateCashBookControllerExecute['client']['paramaters'];
  } = {},
): UseMutationResult<
  CreateCashBookControllerExecute['response'],
  CreateCashBookControllerExecute['error'],
  CreateCashBookControllerExecute['request']
> {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation<
    CreateCashBookControllerExecute['response'],
    CreateCashBookControllerExecute['error'],
    CreateCashBookControllerExecute['request']
  >({
    mutationFn: async (data) => {
      const res = await client<
        CreateCashBookControllerExecute['data'],
        CreateCashBookControllerExecute['error'],
        CreateCashBookControllerExecute['request']
      >({
        method: 'post',
        url: `/api/cash-books`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
