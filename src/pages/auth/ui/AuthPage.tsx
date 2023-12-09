import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { UsersService } from '~/entities/users';

export function AuthPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function registerHandler(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const data = await UsersService.register({ email, password });
      if (data) {
        toast.success('Акаунт створено');
        setIsLogin(!isLogin);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage = error.response?.data.message;
      toast.error(errorMessage.toString());
    }
  }

  // eslint-disable-next-line no-empty-function
  async function loginHandler() {}

  return (
    <div>
      <h1>{isLogin ? 'Вхід' : 'Реєстрація'}</h1>
      <form onSubmit={isLogin ? loginHandler : registerHandler}>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLogin ? 'Увійти' : 'Зареєструватися'}</button>
      </form>

      {isLogin ? (
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          Не маєте акаунту? Зареєструватися
        </button>
      ) : (
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          Маєте акаунт? Увійти
        </button>
      )}
    </div>
  );
}
