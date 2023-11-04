import { rest } from 'msw';
import { CASH_BALANCE_STUB, CURRENT_CASH_BOOK_STUB } from './stubs';
import { getAbsoluteUrl } from './utils';

export const handlers = [
  rest.post('/login', (_req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');

    return res(ctx.status(200));
  }),

  rest.get('/user', (_req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),

  rest.get(getAbsoluteUrl('/cash-books/current'), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CURRENT_CASH_BOOK_STUB));
  }),

  rest.get(getAbsoluteUrl('/cash-books/cash-balance'), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CASH_BALANCE_STUB));
  }),
];
