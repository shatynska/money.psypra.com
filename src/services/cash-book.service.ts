import { instance } from '@/api/axios.api';
import { CashBook } from '@/types';

export const CashBookService = {
  async getCurrentCashBook() {
    return await instance.get<CashBook>('cash-books/current');
  },
};
