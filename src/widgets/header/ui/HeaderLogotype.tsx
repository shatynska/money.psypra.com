import { NavLink } from 'react-router-dom';

import { Logotype } from '~/shared/ui';

export function HeaderLogotype() {
  return (
    <NavLink className="mt-4 h-8 text-lg" to="/">
      <Logotype />
    </NavLink>
  );
}
