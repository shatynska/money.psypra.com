import { instance } from '@/api/axios.api';
import { CashBalance, CurrentCashBook } from '@/types';

export const CashBooksService = {
  async getCashBalance() {
    return await instance.get<CashBalance>('cash-books/cash-balance');
  },

  async getCurrentCashBook() {
    return await instance.get<CurrentCashBook>('cash-books/current');
  },
};
