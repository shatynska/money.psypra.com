import { useQuery } from '@tanstack/react-query';

import { CashBooksList, CurrentCashBook } from '@/components';
import { CashBooksService } from '@/services';

export const Home = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery(['get cash books'], () => CashBooksService.getCashBooks());
  const cashBooks = response?.data;

  return (
    <>
      {error instanceof Error && <div>{error.message}</div>}
      {isLoading ? (
        <span>Завантаження ...</span>
      ) : cashBooks ? (
        <>
          <CashBooksList list={cashBooks.cashBooksList} />
          <CurrentCashBook cashBook={cashBooks.currentCashBook} />
        </>
      ) : (
        <span> Касова книга не знайдена</span>
      )}
    </>
  );
};
