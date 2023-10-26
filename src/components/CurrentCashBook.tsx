import { CashBookBriefly } from '@/types';

export const CurrentCashBook = ({
  cashBook,
}: {
  cashBook: CashBookBriefly;
}) => {
  const { cashBalance, membersWithMembershipFees, reportingMonths } = cashBook;

  return (
    <div>
      <h1>Баланс: {cashBalance} грн </h1>
      <h2>Внески</h2>
      <table>
        <thead>
          <tr>
            <td>учасники</td>
            {reportingMonths.map((month) => {
              return <td key={month}>{month}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {membersWithMembershipFees.map((member) => {
            const fees = new Map(member.membershipFees);
            return (
              <tr>
                <td>{member.name}</td>
                {reportingMonths.map((month) => {
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
