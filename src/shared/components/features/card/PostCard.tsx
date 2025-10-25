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

  return (
    <Link href={`/post/${post.slug}`}>
      <div className='flex w-full flex-col overflow-hidden bg-white shadow-lg transition-transform duration-200 transform-content hover:scale-105'>
        <div className='relative aspect-video w-full'>
          <Image
            fill
            alt={post.title}
            className='object-cover'
            src='https://picsum.photos/400/225'
          />
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
