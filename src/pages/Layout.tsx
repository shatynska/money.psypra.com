import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components';

export const Layout: FC = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
