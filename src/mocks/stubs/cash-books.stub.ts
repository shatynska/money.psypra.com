import { CashBooks } from '@/types';

export const CASH_BOOKS_STUB: CashBooks = {
  cashBooksList: [2023, 2024],
  currentCashBook: {
    cashBookYear: 2023,
    cashBalance: 541000,
    feeMonths: [10, 9, 7, 6, 5],
    membersWithMembershipFees: [
      {
        memberName: 'Берчук Володимир',
        membershipFees: [
          { feeMonth: 10, amount: 20000 },
          { feeMonth: 9, amount: 20000 },
          { feeMonth: 7, amount: 20000 },
          { feeMonth: 6, amount: 20000 },
        ],
      },
      {
        memberName: 'Білас Юлія',
        membershipFees: [
          { feeMonth: 10, amount: 20000 },
          { feeMonth: 9, amount: 20000 },
          { feeMonth: 7, amount: 20000 },
        ],
      },
      {
        memberName: 'Гамбарова Еляна',
        membershipFees: [
          { feeMonth: 10, amount: 20000 },
          { feeMonth: 9, amount: 20000 },
          { feeMonth: 7, amount: 20000 },
        ],
      },
      {
        memberName: 'Дробчак Ольга',
        membershipFees: [
          { feeMonth: 10, amount: 20000 },
          { feeMonth: 9, amount: 20000 },
          { feeMonth: 7, amount: 20000 },
          { feeMonth: 6, amount: 20000 },
          { feeMonth: 5, amount: 20000 },
        ],
      },
      {
        memberName: 'Коцюба Галина',
        membershipFees: [
          { feeMonth: 6, amount: 20000 },
          { feeMonth: 5, amount: 50000 },
        ],
      },
      {
        memberName: 'Лех Наталія',
        membershipFees: [
          { feeMonth: 10, amount: 20000 },
          { feeMonth: 9, amount: 20000 },
          { feeMonth: 7, amount: 20000 },
          { feeMonth: 6, amount: 20000 },
          { feeMonth: 5, amount: 20000 },
        ],
      },
      {
        memberName: 'Некрасова Валентина',
        membershipFees: [
          { feeMonth: 10, amount: 20000 },
          { feeMonth: 9, amount: 20000 },
          { feeMonth: 7, amount: 20000 },
          { feeMonth: 6, amount: 20000 },
          { feeMonth: 5, amount: 20000 },
        ],
      },
      {
        memberName: 'Петришин Ольга',
        membershipFees: [
          { feeMonth: 9, amount: 20000 },
          { feeMonth: 7, amount: 20000 },
          { feeMonth: 6, amount: 20000 },
          { feeMonth: 5, amount: 20000 },
        ],
      },
      {
        memberName: 'Созанська Ірина',
        membershipFees: [
          { feeMonth: 10, amount: 20000 },
          { feeMonth: 9, amount: 20000 },
          { feeMonth: 7, amount: 20000 },
          { feeMonth: 6, amount: 20000 },
          { feeMonth: 5, amount: 20000 },
        ],
      },
      {
        memberName: 'Татаревич Галина',
        membershipFees: [{ feeMonth: 10, amount: 20000 }],
      },
      {
        memberName: 'Франчук Тетяна',
        membershipFees: [{ feeMonth: 7, amount: 20000 }],
      },
      {
        memberName: 'Чапля Уляна',
        membershipFees: [
          { feeMonth: 10, amount: 20000 },
          { feeMonth: 9, amount: 20000 },
          { feeMonth: 7, amount: 20000 },
          { feeMonth: 6, amount: 20000 },
          { feeMonth: 5, amount: 20000 },
        ],
      },
      {
        memberName: 'Шатинська Альона',
        membershipFees: [
          { feeMonth: 10, amount: 20000 },
          { feeMonth: 9, amount: 20000 },
          { feeMonth: 7, amount: 20000 },
          { feeMonth: 6, amount: 20000 },
          { feeMonth: 5, amount: 20000 },
        ],
      },
    ],
    expenses: [
      { id: '1', date: '2023-10-19', amount: 45000, details: 'Піца' },
      { id: '2', date: '2023-10-19', amount: 19000, details: 'Алкоголь' },
      { id: '3', date: '2023-10-05', amount: 45000, details: 'Піца' },
    ],
  },
};
