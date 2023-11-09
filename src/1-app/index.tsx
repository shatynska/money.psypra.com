import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { router } from './router';

if (
  import.meta.env.VITE_API_WITH_MSW &&
  process.env.NODE_ENV === 'development'
) {
  const { worker } = await import('~/shared/lib/msw/browser');
  worker.start();
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-left" autoClose={2000} />
    </QueryClientProvider>
  </StrictMode>,
);
