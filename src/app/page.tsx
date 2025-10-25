'use client';

import { useState } from 'react';

import { PostCard, Tabs } from '@/shared';
import { Grid } from '@/widgets';

export default function Home() {
  const posts = Array.from({ length: 9 }); // 임시 데이터

  const [search, setSearch] = useState('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <Tabs />
      <Grid
        className='w-full px-4 md:px-8 lg:px-0'
        cols='grid-cols-1 md:grid-cols-2 lg:grid-cols-[270px_270px_270px]'
        gap={5}
        justifyContent='center'
        maxWidth='7xl'
      >
        {posts.map((_, index) => (
          <PostCard key={index} />
        ))}
      </Grid>
    </div>
  );
}
