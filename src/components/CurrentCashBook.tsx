import { CashBookBriefly } from '@/types';

export const CurrentCashBook = ({ cashBook }: { cashBook: CashBookBriefly }) => {
  return (
    <div>
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
    </div>
  );
};
