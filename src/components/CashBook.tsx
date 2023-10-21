import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import { CashBookService } from '@/services';
import { CashBook as CashBookInterface } from '@/types';

export const CashBook: FC = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery(['get current cash book'], () =>
    CashBookService.getCurrentCashBook(),
  );
  const cashBook: CashBookInterface | undefined = response?.data;

  return (
    <div>
      {error instanceof Error && <div>{error.message}</div>}
      {isLoading ? (
        <span>Завантаження ...</span>
      ) : cashBook ? (
        <>
          <h1>Баланс: {cashBook.cashBalance} грн </h1>
          <h2>Внески</h2>
          <table>
            <tbody>
              <td>учасники</td>
              <td>10</td>
              <td>09</td>
              <td>07</td>
              <td>06</td>
              <td>05</td>
            </tbody>
            {cashBook.members.map((member) => {
              return (
                <tr>
                  <td>{member.name}</td>
                  {member.membershipFees.map((membershipFee) => {
                    return <td>{membershipFee.amount}</td>;
                  })}
                </tr>
              );
            })}
          </table>
        </>
      ) : (
        <span> Касова книга не знайдена</span>
      )}
    </div>
  );
};
