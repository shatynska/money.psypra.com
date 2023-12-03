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
    <section className="relative">
      <header className=" relative z-10 mx-4 flex gap-2 md:mx-8">
        <h2 className="flex h-24 w-24 flex-col items-center justify-center bg-foreground font-semibold text-background">
          внески
        </h2>
      </header>
      <div className="relative -top-12 bg-background py-16 md:px-4">
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
      </div>
    </section>
  );
}
