import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

// eslint-disable-next-line import/no-internal-modules
import { cashBooksControllerGetCashBalanceHandler } from '~/shared/api/generated/msw/cashBooksController';
// eslint-disable-next-line import/no-internal-modules
import { server } from '~/shared/lib/msw/server';
import { QueryProvider } from '~/shared/ui';

import { CashBalance } from './CashBalance';

server.use(cashBooksControllerGetCashBalanceHandler);

beforeEach(() => {
  render(
    <QueryProvider>
      <CashBalance />
    </QueryProvider>,
  );
});

test('test ui', async () => {
  expect(screen.getByText(/Завантаження/i)).toBeInTheDocument();
});
