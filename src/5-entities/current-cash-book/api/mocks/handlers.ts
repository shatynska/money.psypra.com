import { rest } from 'msw';
import { getAbsoluteApiUrl } from '~/shared/lib';
import { CURRENT_CASH_BOOK_STUB } from './stubs';

export const CurrentCashBookHandlers = [
  rest.get(getAbsoluteApiUrl('/cash-books/current'), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CURRENT_CASH_BOOK_STUB));
  }),
];
