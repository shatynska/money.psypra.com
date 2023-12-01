import { TableCell } from '~/shared/ui';

type Props = {
  month: number;
  index: number;
  paidFee: number;
};

export function FeeTableCell(props: Props) {
  const { month, index, paidFee } = props;

  return (
    <TableCell
      className={
        index === 0 ? 'opacity-100' : index === 1 ? 'opacity-70' : 'opacity-40'
      }
      key={month}
    >
      {paidFee ?? ''}
    </TableCell>
  );
}
