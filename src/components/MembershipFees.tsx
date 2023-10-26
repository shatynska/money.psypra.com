import { MemberWithMembershipFees } from '@/types';

export const MembershipFees = ({
  reportingMonths,
  membersWithMembershipFees,
}: {
  reportingMonths: number[];
  membersWithMembershipFees: MemberWithMembershipFees[];
}) => {
  return (
    <>
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
              <tr key={member.name}>
                <td>{member.name}</td>
                {reportingMonths.map((month) => {
                  const paidFee = fees.get(month);
                  return <td key={member.name + month}>{paidFee ?? ''}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
