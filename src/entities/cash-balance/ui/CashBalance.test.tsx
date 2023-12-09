import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { beforeEach, expect, test } from 'vitest';

import { getCashBooksControllerGetCashBalance200Response } from '~/shared/api';
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
  const res = getCashBooksControllerGetCashBalance200Response().value;

  expect(await screen.findByText(res)).toBeInTheDocument();
});
