import { Outlet } from 'react-router-dom';
import { HeaderWidget } from '~/widgets/header';

export const RootLayout = () => {
  return (
    <div className="container">
      <HeaderWidget />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
