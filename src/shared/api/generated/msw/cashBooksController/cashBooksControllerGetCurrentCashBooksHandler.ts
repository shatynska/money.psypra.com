import { rest } from "msw";

import { createCashBooksControllerGetCurrentCashBooksQueryResponse } from "../../mocks/cashBooksController/createCashBooksControllerGetCurrentCashBooks";


    export const cashBooksControllerGetCurrentCashBooksHandler = rest.get('*/api/cash-books/current', function handler(req, res, ctx) {
      return res(
        ctx.json(createCashBooksControllerGetCurrentCashBooksQueryResponse()),
      );
    });
    