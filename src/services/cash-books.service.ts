import { instance } from '@/api/axios.api';
import { CashBooks } from '@/types';

export const CashBooksService = {
  async getCashBooks() {
    return await instance.get<CashBooks>('auth/cash-books');
  },
};
