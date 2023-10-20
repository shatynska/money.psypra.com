import { Header } from '@/components';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

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
