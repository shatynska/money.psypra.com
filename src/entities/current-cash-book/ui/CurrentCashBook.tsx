// eslint-disable-next-line import/no-internal-modules
import { useCashBooksControllerGetCurrentCashBooks } from '~/shared/api/generated/hooks/cashBooksController';

import { MembershipFees } from './MembershipFees';

export function CurrentCashBook() {
  const {
    data: response,
    isLoading,
    error,
  } = useCashBooksControllerGetCurrentCashBooks();
  const currentCashBook = response;

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
}
