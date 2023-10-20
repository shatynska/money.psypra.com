export const getAbsoluteUrl = (path: string) => {
  return `${import.meta.env.VITE_API_BASE_URL}${path}`;
};
