export interface UserData {
  email: string;
  password: string;
}

export interface ResponseUserData {
  id: string | undefined;
  email: string | undefined;
  password: string | undefined;
  createdAt: string | undefined;
  updatedAt: string | undefined;
}
