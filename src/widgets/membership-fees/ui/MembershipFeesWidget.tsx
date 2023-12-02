import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// eslint-disable-next-line import/no-internal-modules
import { useCashBooksControllerGetCurrentCashBooks } from '~/shared/api/generated/hooks/cashBooksController';
import { Skeleton } from '~/shared/ui';

import { MembershipFeesTable } from '~/entities/membership-fees';

// TODO Add fallback to ErrorBoundary

export function MembershipFeesWidget() {
  const { data: fees } = useCashBooksControllerGetCurrentCashBooks();

  return (
    <section className="relative top-32 bg-background">
      <section className="relative -top-12 left-8 flex h-24 w-24 flex-col items-center justify-center bg-foreground font-semibold text-background">
        <h2>внески</h2>
      </section>
      <ErrorBoundary fallback={null}>
        <Suspense fallback={<Skeleton />}>
          {fees && (
            <MembershipFeesTable
              reportingMonths={fees.reportingMonths}
              membersWithMembershipFees={fees.membersWithMembershipFees}
            />
          )}
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
