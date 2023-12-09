/* eslint-disable react/jsx-props-no-spreading */

import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

export function ListIcon(props: Props) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M16 14.25H30" stroke="#202222" strokeLinecap="round" />
        <path d="M16 20.25H30" stroke="#202222" strokeLinecap="round" />
        <path d="M16 26.25H30" stroke="#202222" strokeLinecap="round" />
        <circle cx="10.75" cy="14" r="0.75" fill="#202222" />
        <circle cx="10.75" cy="20" r="0.75" fill="#202222" />
        <circle cx="10.75" cy="26" r="0.75" fill="#202222" />
      </g>
    </svg>
  );
}
