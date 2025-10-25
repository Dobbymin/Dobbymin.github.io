import { getAllPosts } from '@/shared/lib';

import { PostList } from '@/features';

export default function Home() {
  const allPosts = getAllPosts();

  return <PostList posts={allPosts} />;
}
