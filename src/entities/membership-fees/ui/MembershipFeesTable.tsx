import { MemberWithMembershipFees } from '~/shared/api';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '~/shared/ui';

import { MemberTableRow } from './MemberTableRow';
import { ReportingMonthTableHead } from './ReportingMonthTableHead';

type Props = {
  reportingMonths: number[];
  membersWithMembershipFees: MemberWithMembershipFees[];
};

export function MembershipFeesTable(props: Props) {
  const { reportingMonths, membersWithMembershipFees } = props;

  return (
    <Table>
      <TableHeader>
        <TableRow className="text-sm">
          <TableHead />
          {reportingMonths.map((month, index) => {
            return (
              <ReportingMonthTableHead
                key={month}
                month={month}
                index={index}
              />
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {membersWithMembershipFees.map((member) => {
          return (
            <MemberTableRow
              key={member.lastName}
              member={member}
              months={reportingMonths}
            />
          );
        })}
      </TableBody>
    </Table>
  );
}
