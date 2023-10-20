import App from '@/App.tsx';
import '@/index.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

if (import.meta.env.VITE_API_WITH_MSW) {
  const { worker } = await import('@/mocks/browser');
  worker.start();
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer position="bottom-left" autoClose={2000} />
    </QueryClientProvider>
  </React.StrictMode>,
);
