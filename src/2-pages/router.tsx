import { createBrowserRouter } from 'react-router-dom';

import { AuthPage } from './auth';
import { ErrorPage } from './error';
import { ExpensesPage } from './expenses';
import { FeesPage } from './fees';
import { HomePage } from './home';
import { Layout } from './Layout';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'fees',
        element: <FeesPage />,
      },
      {
        path: 'expenses',
        element: <ExpensesPage />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
    ],
  },
]);
