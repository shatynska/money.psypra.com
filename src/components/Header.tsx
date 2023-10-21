import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => {
  const isAuth = true;
  return (
    <header>
      <nav>
        <NavLink to="/">Головна</NavLink>
        <NavLink to="/fees">Внески</NavLink>
        <NavLink to="/expenses">Витрати</NavLink>
        {isAuth && <NavLink to="/members">Члени</NavLink>}
      </nav>
      {isAuth ? <button>Вийти</button> : <button>Увійти</button>}
    </header>
  );
};
