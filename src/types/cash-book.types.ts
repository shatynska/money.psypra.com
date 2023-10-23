export interface CashBookBriefly {
  cashBookYear: number;
  feeMonths: number[];
  cashBalance: number;
  membersWithMembershipFees: MemberWithMembershipFees[];
  expenses: Expense[];
}

export interface Expense {
  id: string;
  date: string;
  amount: number;
  details: string;
}

export interface Member {
  id: string;
  name: string;
  status: string;
}

export interface MembershipFee {
  id: string;
  date: string;
  feeMonth: number;
  memberName: string;
  amount: number;
}

export interface MembershipFeeBriefly
  extends Pick<MembershipFee, 'feeMonth' | 'amount'> {}

export interface MemberWithMembershipFees {
  memberName: string;
  membershipFees: MembershipFeeBriefly[];
}
