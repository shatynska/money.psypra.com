import { CashBooksService } from '@/services';
import { useQuery } from '@tanstack/react-query';
import { MembershipFees } from '.';

export const CurrentCashBook = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery(['get current cash books'], () =>
    CashBooksService.getCurrentCashBook(),
  );
  const currentCashBook = response?.data;

  return (
    <>
      {error instanceof Error && <div>{error.message}</div>}
      {isLoading ? (
        <span>Завантаження ...</span>
      ) : currentCashBook ? (
        <>
          <MembershipFees
            reportingMonths={currentCashBook.reportingMonths}
            membersWithMembershipFees={
              currentCashBook.membersWithMembershipFees
            }
          />{' '}
        </>
      ) : (
        <span> Касова книга не знайдена</span>
      )}
    </>
  );
};
