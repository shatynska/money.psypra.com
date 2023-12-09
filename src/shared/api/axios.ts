import axios from 'axios';

import { getTokenFromLocalStorage } from './local-storage-utils';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage()}` || '',
  },
});
