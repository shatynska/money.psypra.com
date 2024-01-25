import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// eslint-disable-next-line import/no-internal-modules
import { useGetCashBalanceControllerGetCashBalance } from '~/shared/api/generated/hooks/cashBooksController';
import { Skeleton } from '~/shared/ui';

export function CashBalance() {
  // TODO Replace hardcoded cashBookIs
  const { data: cashBalance } = useGetCashBalanceControllerGetCashBalance(
    'c0287617-9f36-489e-ba72-d462777987e9',
  );

  // TODO Add error boundary fallback

  return (
    <section className="absolute right-0 flex h-32 w-32 flex-col items-center justify-center bg-foreground font-semibold text-background">
      <h2 className="opacity-70">баланс</h2>
      <ErrorBoundary fallback={null}>
        <Suspense fallback={<Skeleton />}>
          <div className="text-[32px] ">
            {Number(cashBalance?.value) * 0.01}
          </div>
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
