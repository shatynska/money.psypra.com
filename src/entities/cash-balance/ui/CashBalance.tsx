import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// eslint-disable-next-line import/no-internal-modules
import { useCashBooksControllerGetCashBalance } from '~/shared/api/generated/hooks/cashBooksController';
import { Skeleton } from '~/shared/ui';

export function CashBalance() {
  const { data: cashBalance } = useCashBooksControllerGetCashBalance();

  return (
    <section className="absolute -top-4 right-0 flex h-32 w-32 flex-col items-center justify-center bg-foreground font-semibold text-background">
      <h2 className="opacity-70">баланс</h2>
      //TODO Add error boundary fallback
      <ErrorBoundary fallback={null}>
        <Suspense fallback={<Skeleton />}>
          <div className="text-[32px] ">{cashBalance?.value}</div>
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
