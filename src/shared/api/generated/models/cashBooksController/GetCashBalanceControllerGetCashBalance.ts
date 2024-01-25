import type { CashBalanceResponseDto } from '../CashBalanceResponseDto';

export type GetCashBalanceControllerGetCashBalance404 = any;

export type GetCashBalanceControllerGetCashBalancePathParams = {
  /**
   * @type string
   */
  id: string;
};

export type GetCashBalanceControllerGetCashBalanceQueryResponse =
  CashBalanceResponseDto;
export namespace GetCashBalanceControllerGetCashBalanceQuery {
  export type Response = GetCashBalanceControllerGetCashBalanceQueryResponse;
  export type PathParams = GetCashBalanceControllerGetCashBalancePathParams;
  export type Errors = GetCashBalanceControllerGetCashBalance404;
}
