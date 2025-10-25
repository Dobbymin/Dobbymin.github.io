'use client';

import { useState } from 'react';

export const Tabs = () => {
  const [selected, setSelected] = useState(0);

  const tabs = [
    { name: 'All.tsx', count: 49 },
    { name: 'Develop.tsx', count: 3 },
    { name: 'Daily.tsx', count: 9 },
    { name: 'Review.tsx', count: 4 },
  ];

  return (
    <div className='flex h-13 justify-start overflow-x-auto py-2 font-fira-code'>
      {tabs.map((tab, idx) => (
        <div
          key={tab.name}
          className={`flex cursor-pointer items-center justify-center gap-2 border-r px-5 text-sm font-semibold transition-colors last:border-r-0 ${
            selected === idx
              ? 'bg-blog-gray-100 text-blog-black'
              : 'bg-blog-gray-200 text-blog-gray-600 hover:font-bold'
          } ${idx === 0 ? '' : 'w-full'} `}
          onClick={() => setSelected(idx)}
        >
          <p>{tab.name}</p>
          <p className='text-blog-green'>({tab.count})</p>
        </div>
      ))}
    </div>
  );
};
