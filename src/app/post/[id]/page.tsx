import type { Metadata } from 'next';
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

export async function generateMetadata({
  params,
}: PostDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getPost(id);

  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다',
    };
  }

  const baseUrl = 'https://dobbymin.github.io';
  const postUrl = `${baseUrl}/post/${id}`;
  const thumbnailUrl = post.thumbnail
    ? `${baseUrl}${post.thumbnail}`
    : `${baseUrl}/logo.png`;

  return {
    title: post.title,
    description: post.description,
    keywords: [post.category, post.title, '개발 블로그'],
    authors: [{ name: '김도비', url: 'https://github.com/Dobbymin' }],
    creator: '김도비',
    openGraph: {
      type: 'article',
      locale: 'ko_KR',
      url: postUrl,
      title: post.title,
      description: post.description,
      siteName: 'Dobby is Free',
      publishedTime: post.date,
      authors: ['김도비'],
      images: [
        {
          url: thumbnailUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [thumbnailUrl],
    },
  };
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
