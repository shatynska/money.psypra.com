import { cn } from '~/shared/lib';
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
      className={cn(
        'p-1 opacity-40',
        { 'opacity-100': index === 0 },
        { 'opacity-70': index === 1 },
      )}
      key={month}
    >
      {paidFee ?? ''}
    </TableCell>
  );
}
