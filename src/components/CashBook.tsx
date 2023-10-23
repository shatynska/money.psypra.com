import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import { CashBookService } from '@/services';
import { CashBookBriefly } from '@/types';

export const CashBook: FC = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery(['get current cash book'], () =>
    CashBookService.getCurrentCashBook(),
  );
  const cashBook: CashBookBriefly | undefined = response?.data;

  return (
    <div>
      {error instanceof Error && <div>{error.message}</div>}
      {isLoading ? (
        <span>Завантаження ...</span>
      ) : cashBook ? (
        <>
          <h1>Баланс: {cashBook.cashBalance / 100} грн </h1>
          <h2>Внески</h2>
          <table>
            <thead>
              <tr>
                <td>учасники</td>
                {cashBook.feeMonths.map((feeMonth) => {
                  return <td key={feeMonth}>{feeMonth}</td>;
                })}
              </tr>
            </thead>
            <tbody>
              {cashBook.membersWithMembershipFees.map((member) => {
                return (
                  <tr>
                    <td>{member.memberName}</td>
                    {member.membershipFees.map((membershipFee) => {
                      return <td>{membershipFee.amount / 100}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <span> Касова книга не знайдена</span>
      )}
    </div>
  );
};
