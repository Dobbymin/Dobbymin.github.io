import { CalendarDays } from 'lucide-react';

import { PostHeader } from '@/entities';

type PostHeaderSectionProps = {
  post: PostHeader & { slug: string };
};

export const PostHeaderSection = ({ post }: PostHeaderSectionProps) => {
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
    <header className='w-full bg-white p-6 md:p-8'>
      <div className='flex flex-col gap-4'>
        <div className={`text-sm font-bold ${getCategoryColor(post.category)}`}>
          {post.category}
        </div>
        <h1 className='text-2xl font-bold text-blog-black md:text-4xl'>
          {post.title}
        </h1>
        <p className='text-sm text-blog-gray-600 md:text-base'>
          {post.description}
        </p>
        <div className='flex items-center gap-2 pt-2'>
          <CalendarDays className='size-5 text-blog-gray-600' />
          <time className='text-sm font-medium text-blog-gray-600'>
            {post.date}
          </time>
        </div>
      </div>
    </header>
  );
};
