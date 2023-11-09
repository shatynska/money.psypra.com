import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAbsoluteApiUrl = (path: string) => {
  return `https://dro.psypra.com/api${path}`;
};
