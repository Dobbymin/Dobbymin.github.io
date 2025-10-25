import { notFound } from 'next/navigation';

import { getAllPostSlugs, getPost } from '@/shared/lib';

import { PostContentsSection, PostHeaderSection } from '@/features';

type PostDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ id: slug }));
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id } = await params;
  const post = getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className='flex w-full items-center justify-center'>
      <div className='flex w-full max-w-4xl flex-col gap-4'>
        <PostHeaderSection post={post} />
        <PostContentsSection content={post.content} />
      </div>
    </div>
  );
}
