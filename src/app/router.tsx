import { Suspense } from 'react';
import { lazily } from 'react-lazily';
import { createBrowserRouter } from 'react-router-dom';

import { Skeleton } from '~/shared/ui';

import { RootLayout } from './RootLayout';

const { HomePage } = lazily(() => import('~/pages/home'));
const { ErrorPage } = lazily(() => import('~/pages/error'));
const { ExpensesPage } = lazily(() => import('~/pages/expenses'));
const { FeesPage } = lazily(() => import('~/pages/fees'));
const { AuthPage } = lazily(() => import('~/pages/auth'));

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: (
      <Suspense fallback={<Skeleton />}>
        <RootLayout />
      </Suspense>
    ),
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
