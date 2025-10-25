import Image from 'next/image';
import Link from 'next/link';

import { MDXPostMeta } from '@/shared/types';
import { CalendarDays } from 'lucide-react';

type PostCardProps = {
  post: MDXPostMeta;
};

export const PostCard = ({ post }: PostCardProps) => {
  // 카테고리별 색상 매핑
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'develop':
        return 'text-blog-blue';
      case 'daily':
        return 'text-blog-pink';
      case 'review':
        return 'text-blog-purple';
      default:
        return 'text-blog-green';
    }
  };

  // slug를 기반으로 랜덤 색상 생성 (같은 slug는 항상 같은 색상)
  const getRandomBgColor = (slug: string) => {
    const colors = [
      'bg-blog-blue',
      'bg-blog-pink',
      'bg-blog-purple',
      'bg-blog-green',
      'bg-blog-yellow',
    ];

    // slug를 숫자로 변환하여 일관된 색상 선택
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = slug.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  return (
    <Link href={`/post/${post.slug}`}>
      <div className='flex w-full flex-col overflow-hidden bg-white shadow-lg transition-transform duration-200 transform-content hover:scale-105'>
        <div className='relative aspect-video w-full'>
          {post.thumbnail ? (
            <Image
              fill
              alt={post.title}
              className='object-cover'
              src={post.thumbnail}
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center p-8 ${getRandomBgColor(post.slug)}`}
            >
              <p className='text-center text-xl font-bold text-white md:text-xl'>
                {post.title}
              </p>
            </div>
          )}
        </div>
        <div className='flex h-full w-full flex-col justify-between p-3'>
          <div className='flex flex-col gap-2'>
            <div
              className={`text-sm font-bold ${getCategoryColor(post.category)}`}
            >
              {post.category}
            </div>
            <div className='line-clamp-2 text-base font-semibold text-blog-black'>
              {post.title}
            </div>
            <div className='line-clamp-3 text-sm text-blog-gray-600'>
              {post.description}
            </div>
          </div>
          <div className='flex w-full items-center gap-2 pt-3'>
            <CalendarDays className='size-5 text-blog-gray-600' />
            <p className='text-sm font-medium text-blog-gray-600'>
              {post.date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
