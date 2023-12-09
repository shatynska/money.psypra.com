/* eslint-disable react/jsx-props-no-spreading */

import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

export function TableIcon(props: Props) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="10" y="12" width="20" height="16" rx="1" stroke="#202222" />
      <line x1="10" y1="17.5" x2="30" y2="17.5" stroke="#202222" />
      <line x1="10" y1="22.5" x2="30" y2="22.5" stroke="#202222" />
      <line x1="15.5" y1="28" x2="15.5" y2="18" stroke="#202222" />
    </svg>
  );
}
