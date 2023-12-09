/* eslint-disable react/jsx-props-no-spreading */

import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

export function HamburgerMenuIcon(props: Props) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.34082 8.5H28.6595M3.34082 16.1667H28.6595M3.34082 23.5H28.6595"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
