import { Outlet } from 'react-router-dom';

import { Header } from '../widgets/header';

export const RootLayout = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
