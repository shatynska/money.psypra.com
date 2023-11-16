import { rest } from "msw";

import { createCashBooksControllerGetCashBalanceQueryResponse } from "../../mocks/cashBooksController/createCashBooksControllerGetCashBalance";


    export const cashBooksControllerGetCashBalanceHandler = rest.get('*/api/cash-books/cash-balance', function handler(req, res, ctx) {
      return res(
        ctx.json(createCashBooksControllerGetCashBalanceQueryResponse()),
      );
    });
    