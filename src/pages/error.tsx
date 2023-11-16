import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <main>
      <p>Сторінка не знайдена</p>
      <Link to="/">На головну</Link>
    </main>
  );
};
