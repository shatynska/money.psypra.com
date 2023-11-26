import { worker } from './browser';

export function checkMSWNecessary() {
  if (
    import.meta.env.VITE_API_WITH_MSW &&
    process.env.NODE_ENV === 'development'
  ) {
    worker.start();
  }
}
