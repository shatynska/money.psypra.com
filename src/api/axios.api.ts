import axios from 'axios';
import { getTokenFromLocalStorage } from '../helpers/localstorage.helper';

export const instance = axios.create({
  baseURL: 'http://dro.psypra.com:3001/api',
  headers: {
    Authorization: 'Bearer ' + getTokenFromLocalStorage() || '',
  },
});
