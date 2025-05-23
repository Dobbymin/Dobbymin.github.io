import * as React from 'react';

import { cn } from '@/shared';

type ResponsiveGrid = Partial<{
  base: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}>;

type Props = {
  columns: number | ResponsiveGrid;
  gap?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const Grid = ({
  children,
  columns,
  gap = 0,
  className,
  ...props
}: Props) => {
  const gridColsClass = getGridColsClass(columns);
  const gapClass = `gap-[${gap}px]`;

  return (
    <div
      className={cn('grid w-full', gridColsClass, gapClass, className)}
      {...props}
    >
      {children}
    </div>
  );
};

function getGridColsClass(columns: number | ResponsiveGrid) {
  if (typeof columns === 'number') {
    return `grid-cols-${columns}`;
  }

  return Object.entries(columns)
    .map(([breakpoint, count]) => {
      const prefix = breakpoint === 'base' ? '' : `${breakpoint}:`;
      return `${prefix}grid-cols-${count}`;
    })
    .join(' ');
}
