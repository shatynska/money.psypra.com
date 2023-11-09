import { CashBalanceHandlers } from './cash-balance/handlers';
import { CurrentCashBookHandlers } from './current-cash-book/handlers';
import { UsersHandlers } from './users/handlers';

export const handlers = [
  ...CashBalanceHandlers,
  ...CurrentCashBookHandlers,
  ...UsersHandlers,
];
