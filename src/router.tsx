import { createBrowserRouter } from 'react-router-dom';

import {
  Auth,
  ErrorPage,
  Expenses,
  Fees,
  Home,
  Layout,
  Members,
} from '@/pages';

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
        path: 'fees',
        element: <Fees />,
      },
      {
        path: 'expenses',
        element: <Expenses />,
      },
      {
        path: 'members',
        element: <Members />,
      },
      {
        path: 'auth',
        element: <Auth />,
      },
    ],
  },
]);
