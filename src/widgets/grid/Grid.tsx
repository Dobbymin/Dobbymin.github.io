import * as React from 'react';

import { cn } from '@/shared';

type Props = {
  cols: string;
  gap?: number;
  maxWidth?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full'
    | 'none';
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
} & React.HTMLAttributes<HTMLDivElement>;

export const Grid = ({
  children,
  cols,
  gap,
  maxWidth,
  justifyContent,
  className,
  ...props
}: Props) => {
  const gapClass = gap ? `gap-${gap}` : '';
  const maxWidthClass = maxWidth ? `max-w-${maxWidth}` : '';
  const justifyContentClass = justifyContent ? `justify-${justifyContent}` : '';
  return (
    <div
      className={cn(
        'grid w-full',
        cols,
        gapClass,
        maxWidthClass,
        justifyContentClass,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
