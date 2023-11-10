import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAbsoluteApiUrl = (path: string) => {
  return `${import.meta.env.VITE_API_BASE_URL}${path}`;
};
