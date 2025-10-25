'use client';

import { useState } from 'react';

import { MDXPostMeta } from '@/shared/types';

import { PostCard, Tabs } from '@/shared';
import { Grid } from '@/widgets';

type PostListProps = {
  posts: MDXPostMeta[];
};

export const PostList = ({ posts }: PostListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 선택된 카테고리에 따라 게시글 필터링
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <Tabs posts={posts} onFilterChange={setSelectedCategory} />
      <Grid
        className='w-full gap-5 px-4 md:px-8 lg:px-0'
        cols='grid-cols-1 md:grid-cols-2 lg:grid-cols-[270px_270px_270px]'
        justifyContent='center'
        maxWidth='7xl'
      >
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
    </div>
  );
};
