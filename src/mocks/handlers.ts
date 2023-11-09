import { CashBalanceHandlers } from '~/entities/cash-balance/api/mocks';
import { CurrentCashBookHandlers } from './current-cash-book/handlers';
import { UsersHandlers } from './users/handlers';

export const handlers = [
  ...CashBalanceHandlers,
  ...CurrentCashBookHandlers,
  ...UsersHandlers,
];
