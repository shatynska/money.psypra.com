import { Outlet } from 'react-router-dom';

import { Header } from '~/widgets/header';

export function RootLayout() {
  return (
    <div className="m-auto flex max-w-screen-lg flex-col justify-center">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
