import { MemberWithMembershipFees } from '~/shared/api';
import { TableCell, TableRow } from '~/shared/ui';

import { FeeTableCell } from './FeeTableCell';

type Props = {
  member: MemberWithMembershipFees;
  months: number[];
};

export function MemberTableRow(props: Props) {
  const { member, months } = props;
  const { firstName, lastName, membershipFees } = member;

  const fees = new Map();
  membershipFees.forEach((fee) => {
    fees.set(fee.reportingMonth, fee.amount);
  });

  return (
    <TableRow key={lastName}>
      <TableCell className="w-32 py-2">
        <span className="text-sm opacity-70">{lastName}</span>
        <br />
        <span>{firstName}</span>
      </TableCell>
      {months.map((month, index) => {
        const paidFee = fees.get(month);
        return (
          <FeeTableCell
            key={month}
            month={month}
            index={index}
            paidFee={paidFee}
          />
        );
      })}
    </TableRow>
  );
}
