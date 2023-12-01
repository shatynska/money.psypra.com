import type { MemberWithMembershipFees } from './MemberWithMembershipFees';
import type { Expense } from './Expense';

export type CurrentCashBookResponseDto = {
  /**
   * @type array
   */
  reportingMonths: number[];
  /**
   * @type array
   */
  membersWithMembershipFees: MemberWithMembershipFees[];
  /**
   * @type array
   */
  expenses: Expense[];
};
