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
            return (
              <tr>
                <td>{member.name}</td>
                {member.membershipFees.map((membershipFee) => {
                  return <td>{membershipFee[1] / 100}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
