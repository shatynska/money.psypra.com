import { CashBooksService } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const CashBalance = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery(['get cash balance'], () => CashBooksService.getCashBalance());
  const cashBalance = response?.data;

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
