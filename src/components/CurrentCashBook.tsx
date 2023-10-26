import { CashBookBriefly } from '@/types';

export const CurrentCashBook = ({
  cashBook,
}: {
  cashBook: CashBookBriefly;
}) => {
  return (
    <div>
      <h1>Баланс: {cashBook.cashBalance} грн </h1>
      <h2>Внески</h2>
      <table>
        <thead>
          <tr>
            <td>учасники</td>
            {cashBook.reportingMonths.map((month) => {
              return <td key={month}>{month}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {cashBook.membersWithMembershipFees.map((member) => {
            const fees = new Map(member.membershipFees);
            return (
              <tr>
                <td>{member.name}</td>
                {cashBook.reportingMonths.map((month) => {
                  const paidFee = fees.get(month);
                  return <td key={month}>{paidFee ?? ''}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
