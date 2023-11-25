import { NavLink } from 'react-router-dom';

import { Logotype } from '~/shared/ui';

export const HeaderLogotype = () => {
  return (
    <NavLink className="h-8 text-lg" to="/">
      <Logotype />
    </NavLink>
  );
};
