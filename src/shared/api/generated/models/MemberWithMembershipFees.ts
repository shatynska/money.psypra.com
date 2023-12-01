import type { MembershipFee } from './MembershipFee';

export type MemberWithMembershipFees = {
  /**
   * @type string
   */
  lastName: string;
  /**
   * @type string
   */
  firstName: string;
  /**
   * @type array
   */
  membershipFees: MembershipFee[];
};
