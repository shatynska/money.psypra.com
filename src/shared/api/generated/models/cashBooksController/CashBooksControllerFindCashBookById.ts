import type { CashBookResponseDto } from '../CashBookResponseDto';

export type CashBooksControllerFindCashBookByIdPathParams = {
  /**
   * @type string
   */
  id: string;
};

export type CashBooksControllerFindCashBookByIdQueryResponse =
  CashBookResponseDto;
export namespace CashBooksControllerFindCashBookByIdQuery {
  export type Response = CashBooksControllerFindCashBookByIdQueryResponse;
  export type PathParams = CashBooksControllerFindCashBookByIdPathParams;
}
