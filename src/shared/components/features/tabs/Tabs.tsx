'use client';

import { useState } from 'react';

import { MDXPostMeta } from '@/shared/types';

type TabsProps = {
  posts: MDXPostMeta[];
  onFilterChange: (category: string | null) => void;
};

export const Tabs = ({ posts, onFilterChange }: TabsProps) => {
  const [selected, setSelected] = useState(0);

  // 게시글에서 카테고리 추출 및 카운트
  const getCategoryCounts = () => {
    const categoryCounts: Record<string, number> = {};

    posts.forEach((post) => {
      const category = post.category;
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });

    return categoryCounts;
  };

  const categoryCounts = getCategoryCounts();

  // All 탭 + 각 카테고리 탭 생성
  const tabs = [
    { name: 'All', count: posts.length, category: null },
    ...Object.entries(categoryCounts).map(([category, count]) => ({
      name: category,
      count,
      category,
    })),
  ];

  const handleTabClick = (idx: number) => {
    setSelected(idx);
    onFilterChange(tabs[idx].category);
  };

  return (
    <div className='w-full max-w-[850px] px-3 md:px-8 lg:px-0'>
      <div className='flex h-auto justify-start overflow-x-auto py-2 font-fira-code'>
        {tabs.map((tab, idx) => (
          <div
            key={tab.name}
            className={`flex shrink-0 cursor-pointer items-center justify-center gap-2 border-r px-4 py-2 text-sm font-semibold transition-colors last:border-r-0 md:px-5 ${
              selected === idx
                ? 'bg-blog-gray-100 text-blog-black'
                : 'bg-blog-gray-200 text-blog-gray-600 hover:font-bold'
            }`}
            onClick={() => handleTabClick(idx)}
          >
            <p className='whitespace-nowrap'>{tab.name}</p>
            <p className='whitespace-nowrap text-blog-green'>({tab.count})</p>
          </div>
        ))}
      </div>
    </div>
  );
};
