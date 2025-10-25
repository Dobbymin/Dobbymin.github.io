import { getAllPosts } from '@/shared/lib';

import { PostCard, Tabs } from '@/shared';
import { Grid } from '@/widgets';

export default function Home() {
  const allPosts = getAllPosts();

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
        {allPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
    </div>
  );
}
