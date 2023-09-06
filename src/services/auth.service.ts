import { instance } from '../api/axios.api';
import { ResponseUserData, UserData } from '../types/type';

export const AuthService = {
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
