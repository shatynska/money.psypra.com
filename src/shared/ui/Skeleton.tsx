/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';

import { cn } from '~/shared/lib';

type Props = React.HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        'h-1/2 w-1/2 animate-pulse rounded-md bg-muted opacity-20',
        className,
      )}
      {...props}
    />
  );
}
