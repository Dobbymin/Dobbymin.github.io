'use client';

import { MDXPostMeta } from '@/shared/types';

import { Grid } from '@/widgets';

import { PostCard, Tabs } from '../components';
import { useCategoryFilter } from '../hooks';

type PostListSectionProps = {
  posts: MDXPostMeta[];
};

export const PostListSection = ({ posts }: PostListSectionProps) => {
  const { filteredPosts, setSelectedCategory } = useCategoryFilter(posts);

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
