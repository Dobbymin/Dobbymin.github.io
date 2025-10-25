import { getAllPosts } from '@/shared/lib';

import { PostListSection } from '@/features';

export default function Home() {
  const allPosts = getAllPosts();

  return <PostListSection posts={allPosts} />;
}
