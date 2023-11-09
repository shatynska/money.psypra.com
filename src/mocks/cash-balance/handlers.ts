import { rest } from 'msw';
import { getAbsoluteApiUrl } from '~/shared/lib';
import { CASH_BALANCE_STUB } from './stubs';

export const CashBalanceHandlers = [
  rest.get(getAbsoluteApiUrl('/cash-books/cash-balance'), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CASH_BALANCE_STUB));
  }),
];
