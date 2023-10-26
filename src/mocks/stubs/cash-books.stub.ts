import { CashBooks } from '@/types';

export const CASH_BOOKS_STUB: CashBooks = {
  cashBooksList: [2023, 2024],
  currentCashBook: {
    year: 2023,
    cashBalance: 5410,
    reportingMonths: [10, 9, 7, 6, 5],
    membersWithMembershipFees: [
      {
        name: 'Берчук Володимир',
        membershipFees: [
          [10, 200],
          [9, 200],
          [7, 200],
          [6, 200],
        ],
      },
      {
        name: 'Білас Юлія',
        membershipFees: [
          [10, 200],
          [9, 200],
          [7, 200],
        ],
      },
      {
        name: 'Гамбарова Еляна',
        membershipFees: [
          [10, 200],
          [9, 200],
          [7, 200],
        ],
      },
      {
        name: 'Дробчак Ольга',
        membershipFees: [
          [10, 200],
          [9, 200],
          [7, 200],
          [6, 200],
          [5, 200],
        ],
      },
      {
        name: 'Коцюба Галина',
        membershipFees: [
          [6, 200],
          [5, 500],
        ],
      },
      {
        name: 'Лех Наталія',
        membershipFees: [
          [10, 200],
          [9, 200],
          [7, 200],
          [6, 200],
          [5, 200],
        ],
      },
      {
        name: 'Некрасова Валентина',
        membershipFees: [
          [10, 200],
          [9, 200],
          [7, 200],
          [6, 200],
          [5, 200],
        ],
      },
      {
        name: 'Петришин Ольга',
        membershipFees: [
          [9, 200],
          [7, 200],
          [6, 200],
          [5, 200],
        ],
      },
      {
        name: 'Созанська Ірина',
        membershipFees: [
          [10, 200],
          [9, 200],
          [7, 200],
          [6, 200],
          [5, 200],
        ],
      },
      {
        name: 'Татаревич Галина',
        membershipFees: [[10, 200]],
      },
      {
        name: 'Франчук Тетяна',
        membershipFees: [[7, 200]],
      },
      {
        name: 'Чапля Уляна',
        membershipFees: [
          [10, 200],
          [9, 200],
          [7, 200],
          [6, 200],
          [5, 200],
        ],
      },
      {
        name: 'Шатинська Альона',
        membershipFees: [
          [10, 200],
          [9, 200],
          [7, 200],
          [6, 200],
          [5, 200],
        ],
      },
    ],
    expenses: [
      { id: '1', date: '2029', amount: 45000, details: 'Піца' },
      { id: '2', date: '2029', amount: 19000, details: 'Алкоголь' },
      { id: '3', date: '2025', amount: 45000, details: 'Піца' },
    ],
  },
};
