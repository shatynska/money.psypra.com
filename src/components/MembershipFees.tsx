import { MemberWithMembershipFees } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/shared/ui';

export const MembershipFees = ({
  reportingMonths,
  membersWithMembershipFees,
}: {
  reportingMonths: number[];
  membersWithMembershipFees: MemberWithMembershipFees[];
}) => {
  return (
    <section className="relative top-32 bg-background">
      <section className="relative -top-12 left-8 flex h-24 w-24 flex-col items-center justify-center bg-foreground font-semibold text-background">
        <h2>внески</h2>
      </section>
      <Table className="mx-4">
        <TableHeader>
          <TableRow>
            <TableHead className="w-32"></TableHead>
            {reportingMonths.map((month) => {
              return (
                <TableHead className="w-16" key={month}>
                  {month}
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {membersWithMembershipFees.map((member) => {
            const fees = new Map(member.membershipFees);
            return (
              <TableRow key={member.name}>
                <TableCell>{member.name}</TableCell>
                {reportingMonths.map((month) => {
                  const paidFee = fees.get(month);
                  return (
                    <TableCell key={member.name + month}>
                      {paidFee ?? ''}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};
