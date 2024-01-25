import type { AddReportingPeriodRequestDto } from '../AddReportingPeriodRequestDto';

export type AddReportingPeriodControllerExecute201 = any | null;

export type AddReportingPeriodControllerExecute400 = any;

export type AddReportingPeriodControllerExecuteMutationResponse = any | null;

export type AddReportingPeriodControllerExecuteMutationRequest =
  AddReportingPeriodRequestDto;
export namespace AddReportingPeriodControllerExecuteMutation {
  export type Response = AddReportingPeriodControllerExecuteMutationResponse;
  export type Request = AddReportingPeriodControllerExecuteMutationRequest;
  export type Errors =
    | AddReportingPeriodControllerExecute201
    | AddReportingPeriodControllerExecute400;
}
