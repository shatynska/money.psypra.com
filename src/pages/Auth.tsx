import { FC, useState } from 'react';

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <div>
      <h1>{isLogin ? 'Вхід' : 'Реєстрація'}</h1>
      <form>
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
        <button onClick={() => setIsLogin(!isLogin)}>
          Не маєте акаунту? Зареєструватися
        </button>
      ) : (
        <button onClick={() => setIsLogin(!isLogin)}>
          Маєте акаунт? Увійти
        </button>
      )}
    </div>
  );
};

export default Auth;
