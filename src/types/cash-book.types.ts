export interface CashBook {
  id: string;
  cashBookYear: string;
  cashBalance: string;
  members: Member[];
  expenses: Expense[];
}

export interface Member {
  id: string;
  name: string;
  membershipFees: MembershipFee[];
}

export interface MembershipFee {
  id: string;
  month: string;
  amount: string;
}

export interface Expense {
  id: string;
  date: Date;
  amount: string;
  details: string;
}
