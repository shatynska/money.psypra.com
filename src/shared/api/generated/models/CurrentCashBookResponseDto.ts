import type { MemberWithMembershipFees } from './MemberWithMembershipFees';
import type { Expense } from './Expense';

export type CurrentCashBookResponseDto = {
  /**
   * @type array
   * @example 2,3,4,5,7,8,9,10,11
   */
  reportingMonths: number[];
  /**
   * @type array
   * @example [object Object],[object Object]
   */
  membersWithMembershipFees: MemberWithMembershipFees[];
  /**
   * @type array
   * @example [object Object],[object Object]
   */
  expenses: Expense[];
};
