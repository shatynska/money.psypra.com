export const checkMSWNecessary = async () => {
  if (
    import.meta.env.VITE_API_WITH_MSW &&
    process.env.NODE_ENV === 'development'
  ) {
    const { worker } = await import('./browser');
    worker.start();
  }
};
