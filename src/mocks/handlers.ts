import { rest } from 'msw';
import { CASH_BOOK_STUB } from './stubs';
import { getAbsoluteUrl } from './utils';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');

    return res(ctx.status(200));
  }),

  rest.get('/user', (req, res, ctx) => {
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

  rest.get(getAbsoluteUrl('/cash-books/current'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CASH_BOOK_STUB));
  }),
];
