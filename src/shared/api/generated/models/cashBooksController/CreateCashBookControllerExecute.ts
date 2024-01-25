import type { CreateCashBookRequestDto } from '../CreateCashBookRequestDto';

export type CreateCashBookControllerExecute201 = any | null;

export type CreateCashBookControllerExecute400 = any;

export type CreateCashBookControllerExecuteMutationResponse = any | null;

export type CreateCashBookControllerExecuteMutationRequest =
  CreateCashBookRequestDto;
export namespace CreateCashBookControllerExecuteMutation {
  export type Response = CreateCashBookControllerExecuteMutationResponse;
  export type Request = CreateCashBookControllerExecuteMutationRequest;
  export type Errors =
    | CreateCashBookControllerExecute201
    | CreateCashBookControllerExecute400;
}
