import { Outlet } from 'react-router-dom';
import { Header } from '@/components';

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
