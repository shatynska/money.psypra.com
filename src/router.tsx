import { createBrowserRouter } from 'react-router-dom';

import { Auth, ErrorPage, Home, Layout, Transactions } from '@/pages';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'transactions',
        element: <Transactions />,
      },
      {
        path: 'auth',
        element: <Auth />,
      },
    ],
  },
]);
