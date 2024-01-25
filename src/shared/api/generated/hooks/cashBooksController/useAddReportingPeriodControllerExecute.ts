import type {
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import client from '../../../client';
import type {
  AddReportingPeriodControllerExecute201,
  AddReportingPeriodControllerExecute400,
  AddReportingPeriodControllerExecuteMutationRequest,
  AddReportingPeriodControllerExecuteMutationResponse,
} from '../../models/cashBooksController/AddReportingPeriodControllerExecute';

type AddReportingPeriodControllerExecuteClient = typeof client<
  AddReportingPeriodControllerExecuteMutationResponse,
  | AddReportingPeriodControllerExecute201
  | AddReportingPeriodControllerExecute400,
  AddReportingPeriodControllerExecuteMutationRequest
>;
type AddReportingPeriodControllerExecute = {
  data: AddReportingPeriodControllerExecuteMutationResponse;
  error:
    | AddReportingPeriodControllerExecute201
    | AddReportingPeriodControllerExecute400;
  request: AddReportingPeriodControllerExecuteMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AddReportingPeriodControllerExecuteMutationResponse;
  client: {
    paramaters: Partial<
      Parameters<AddReportingPeriodControllerExecuteClient>[0]
    >;
    return: Awaited<ReturnType<AddReportingPeriodControllerExecuteClient>>;
  };
};
/**
 * @link /api/cash-books/:id/reporting-periods */
export function useAddReportingPeriodControllerExecute(
  options: {
    mutation?: UseMutationOptions<
      AddReportingPeriodControllerExecute['response'],
      AddReportingPeriodControllerExecute['error'],
      AddReportingPeriodControllerExecute['request']
    >;
    client?: AddReportingPeriodControllerExecute['client']['paramaters'];
  } = {},
): UseMutationResult<
  AddReportingPeriodControllerExecute['response'],
  AddReportingPeriodControllerExecute['error'],
  AddReportingPeriodControllerExecute['request']
> {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation<
    AddReportingPeriodControllerExecute['response'],
    AddReportingPeriodControllerExecute['error'],
    AddReportingPeriodControllerExecute['request']
  >({
    mutationFn: async (data) => {
      const res = await client<
        AddReportingPeriodControllerExecute['data'],
        AddReportingPeriodControllerExecute['error'],
        AddReportingPeriodControllerExecute['request']
      >({
        method: 'post',
        url: `/api/cash-books/reporting-periods`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
