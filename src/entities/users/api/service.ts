import { instance } from '../../../shared/api';

import { ResponseUserData, UserData } from './types';

export const UsersService = {
  async register(userData: UserData): Promise<ResponseUserData | undefined> {
    const { data } = await instance.post<UserData, { data: ResponseUserData }>(
      'auth/register',
      userData,
    );
    return data;
  },
  async login() {},
  async getMe() {},
};
