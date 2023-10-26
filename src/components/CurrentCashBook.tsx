import { CashBalance, MembershipFees } from '@/components';
import { CashBookBriefly } from '@/types';

export const CurrentCashBook = ({
  cashBook,
}: {
  cashBook: CashBookBriefly;
}) => {
  const { cashBalance, membersWithMembershipFees, reportingMonths } = cashBook;

  return (
    <>
      <CashBalance value={cashBalance} />
      <MembershipFees
        reportingMonths={reportingMonths}
        membersWithMembershipFees={membersWithMembershipFees}
      />
    </>
  );
};
