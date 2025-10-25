import { useMemo } from 'react';

import { MDXPostMeta } from '@/shared/types';

export const useTabs = (posts: MDXPostMeta[]) => {
  const tabs = useMemo(() => {
    const categoryCounts = posts.reduce<Record<string, number>>(
      (acc, { category }) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      },
      {},
    );

    return [
      { name: 'All', count: posts.length, category: null },
      ...Object.entries(categoryCounts).map(([category, count]) => ({
        name: category,
        count,
        category,
      })),
    ];
  }, [posts]);

  return { tabs };
};
