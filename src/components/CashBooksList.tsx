import { NavLink } from 'react-router-dom';

export const CashBooksList = ({ list }: { list: number[] }) => {
  return (
    <nav>
      {list.map((year) => {
        return <NavLink to={`/cash-books/${year}`}>{year}</NavLink>;
      })}
    </nav>
  );
};
