import { FC } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: FC = () => {
  return (
    <main>
      <p>Сторінка не знайдена</p>
      <Link to="/">На головну</Link>
    </main>
  );
};

export default ErrorPage;
