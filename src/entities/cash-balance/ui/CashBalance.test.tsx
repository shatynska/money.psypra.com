import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { beforeEach, expect, test } from 'vitest';

import { getGetCashBalanceControllerGetCashBalance200Response } from '~/shared/api';
import { QueryProvider } from '~/shared/ui';

import { CashBalance } from './CashBalance';

beforeEach(() => {
  render(
    <QueryProvider>
      <CashBalance />
    </QueryProvider>,
  );
});

test('test ui', async () => {
  const res =
    getGetCashBalanceControllerGetCashBalance200Response().value * 0.01;

  expect(await screen.findByText(res)).toBeInTheDocument();
});
