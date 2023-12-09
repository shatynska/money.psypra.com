import { cn } from '~/shared/lib';
import { TableHead } from '~/shared/ui';

import { convertMonthNumberToName } from '../lib';

type Props = {
  month: number;
  index: number;
};

export function ReportingMonthTableHead(props: Props) {
  const { month, index } = props;

  return (
    <TableHead
      className={cn(
        'w-16 opacity-40',
        { 'opacity-100': index === 0 },
        { 'opacity-70': index === 1 },
      )}
      key={month}
    >
      {convertMonthNumberToName(month)}
    </TableHead>
  );
}
