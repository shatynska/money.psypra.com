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
      className={
        'w-16 ' +
        (index === 0
          ? 'opacity-100'
          : index === 1
            ? 'opacity-70'
            : 'opacity-40')
      }
      key={month}
    >
      {convertMonthNumberToName(month)}
    </TableHead>
  );
}
