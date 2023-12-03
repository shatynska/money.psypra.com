import { CashBalance } from '~/entities/cash-balance';

import { HeaderLogotype } from './HeaderLogotype';

export function Header() {
  return (
    <header className="relative mx-4 flex h-32 font-semibold text-background md:mx-0">
      <HeaderLogotype />
      <CashBalance />
    </header>
  );
}
