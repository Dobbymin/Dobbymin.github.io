'use client';

import { MDXPostMeta } from '@/shared/types';

import { useTabSelection, useTabs } from '../hooks';

type TabsProps = {
  posts: MDXPostMeta[];
  onFilterChange: (category: string | null) => void;
};

export const Tabs = ({ posts, onFilterChange }: TabsProps) => {
  const { tabs } = useTabs(posts);
  const { selectedIndex, selectTab } = useTabSelection();

  const onTabClick = (index: number) => {
    selectTab(index);
    onFilterChange(tabs[index].category);
  };

  return (
    <div className='w-full max-w-[850px] px-3 md:px-8 lg:px-0'>
      <div className='flex h-auto justify-start overflow-x-auto py-2 font-fira-code'>
        {tabs.map((tab, idx) => (
          <div
            key={tab.name}
            className={`flex shrink-0 cursor-pointer items-center justify-center gap-2 border-r px-4 py-2 text-sm font-semibold transition-colors last:border-r-0 md:px-5 ${
              selectedIndex === idx
                ? 'bg-blog-gray-100 text-blog-black'
                : 'bg-blog-gray-200 text-blog-gray-600 hover:font-bold'
            }`}
            onClick={() => onTabClick(idx)}
          >
            <p className='whitespace-nowrap'>{tab.name}</p>
            <p className='whitespace-nowrap text-blog-green'>({tab.count})</p>
          </div>
        ))}
      </div>
    </div>
  );
};
