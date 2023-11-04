import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <NavLink className="h-8 md:text-lg" to="/">
      Cash <span className="text-foreground">Book</span>
    </NavLink>
  );
};
