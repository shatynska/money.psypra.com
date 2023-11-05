import { CashBalance, Logo } from '@/components';

export const HeaderWidget = () => {
  return (
    <header className="relative mx-8 mt-4 flex h-8 items-center font-semibold text-background md:mx-0">
      <Logo />
      <CashBalance />
    </header>
  );
};
