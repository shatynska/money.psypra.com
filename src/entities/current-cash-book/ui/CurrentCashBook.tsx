import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// eslint-disable-next-line import/no-internal-modules
import { useCashBooksControllerGetCurrentCashBooks } from '~/shared/api/generated/hooks/cashBooksController';
import { Skeleton } from '~/shared/ui';

import { MembershipFees } from './MembershipFees';

export function CurrentCashBook() {
  const { data: currentCashBook } = useCashBooksControllerGetCurrentCashBooks();

  // TODO Add fallback to ErrorBoundary
  // TODO Add Expenses component

  return (
    currentCashBook && (
      <ErrorBoundary fallback={null}>
        <Suspense fallback={<Skeleton />}>
          <MembershipFees
            reportingMonths={currentCashBook.reportingMonths}
            membersWithMembershipFees={
              currentCashBook.membersWithMembershipFees
            }
          />
        </Suspense>
      </ErrorBoundary>
    )
  );
}
