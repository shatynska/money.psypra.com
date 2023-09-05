import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
  const isAuth = true;
  return (
    <header>
      {isAuth && (
        <nav>
          <NavLink to="/">Головна</NavLink>
          <NavLink to="/transactions">Транзакції</NavLink>
        </nav>
      )}
      {isAuth ? <button>Вийти</button> : <button>Увійти</button>}
    </header>
  );
};

export default Header;
