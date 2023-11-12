import { CashBalance } from '~/entities/cash-balance';

import { HeaderLogotype } from './HeaderLogotype';

export const Header = () => {
  return (
    <header className="relative mx-8 mt-4 flex h-8 items-center font-semibold text-background md:mx-0">
      <HeaderLogotype />
      <CashBalance />
    </header>
  );
};
