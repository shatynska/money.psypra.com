// eslint-disable-next-line import/no-internal-modules
import { useCashBooksControllerGetCashBalance } from '../../../shared/api/generated/hooks/cashBooksController';

export const CashBalance = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useCashBooksControllerGetCashBalance();
  const cashBalance = response;

  return (
    <>
      {error instanceof Error && <div>{error.message}</div>}
      {isLoading ? (
        <span>Завантаження ...</span>
      ) : cashBalance ? (
        <section className="absolute right-0 top-0 flex h-32 w-32 flex-col items-center justify-center bg-foreground font-semibold text-background">
          <h2 className="opacity-70">баланс</h2>
          <div className="text-[32px] ">{cashBalance.value}</div>
        </section>
      ) : (
        <span>баланс не знайдено</span>
      )}
    </>
  );
};
