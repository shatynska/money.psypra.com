import { CashBalanceHandlers } from '~/entities/cash-balance/api/mocks';
import { CurrentCashBookHandlers } from '~/entities/current-cash-book/api/mocks';
import { UsersHandlers } from '~/entities/users/api/mocks';

export const handlers = [
  ...CashBalanceHandlers,
  ...CurrentCashBookHandlers,
  ...UsersHandlers,
];
