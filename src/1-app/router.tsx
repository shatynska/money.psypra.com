import { createBrowserRouter } from 'react-router-dom';
import { AuthPage } from '~/pages/auth';
import { ErrorPage } from '~/pages/error';
import { ExpensesPage } from '~/pages/expenses';
import { FeesPage } from '~/pages/fees';
import { HomePage } from '~/pages/home';
import { RootLayout } from './root-layout';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <RootLayout />,
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
