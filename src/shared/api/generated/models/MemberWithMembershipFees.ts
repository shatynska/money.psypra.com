import type { MembershipFee } from './MembershipFee';

export type MemberWithMembershipFees = {
  /**
   * @type string
   * @example Олег
   */
  lastName: string;
  /**
   * @type string
   * @example Зварицький
   */
  firstName: string;
  /**
   * @type array
   */
  membershipFees: MembershipFee[];
};
