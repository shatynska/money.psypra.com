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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
