import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { QueryProvider } from '~/shared/ui';

import './index.css';
import { router } from './router';

// TODO Add FallbackComponent to ErrorBoundary

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={null}>
      <QueryProvider>
        <RouterProvider router={router} />
        <ToastContainer position="bottom-left" autoClose={2000} />
      </QueryProvider>
    </ErrorBoundary>
  </StrictMode>,
);
