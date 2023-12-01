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

export function MembershipFees(props: Props) {
  const { reportingMonths, membersWithMembershipFees } = props;

  return (
    <section className="relative top-32 bg-background">
      <section className="relative -top-12 left-8 flex h-24 w-24 flex-col items-center justify-center bg-foreground font-semibold text-background">
        <h2>внески</h2>
      </section>
      <Table className="mx-4">
        <TableHeader>
          <TableRow className="text-sm">
            <TableHead></TableHead>
            {reportingMonths.map((month, index) => {
              return <ReportingMonthTableHead month={month} index={index} />;
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {membersWithMembershipFees.map((member) => {
            return <MemberTableRow member={member} months={reportingMonths} />;
          })}
        </TableBody>
      </Table>
    </section>
  );
}
