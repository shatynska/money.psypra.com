import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkMSWNecessary } from '~/shared/lib/msw/check-msw-necessary';
import { QueryProvider } from '~/shared/ui';
import './index.css';
import { router } from './router';

await checkMSWNecessary();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-left" autoClose={2000} />
    </QueryProvider>
  </StrictMode>,
);
