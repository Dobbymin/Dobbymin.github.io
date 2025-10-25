import Image from 'next/image';

import { CalendarDays } from 'lucide-react';

export const PostCard = () => {
  return (
    <div className='flex w-full flex-col overflow-hidden bg-white shadow-lg transform-content'>
      <div className='relative aspect-video w-full'>
        <Image
          fill
          alt='thumbnail'
          className='object-cover'
          src='https://picsum.photos/400/225'
        />
      </div>
      <div className='flex h-full w-full flex-col justify-between p-3'>
        <div className='flex flex-col gap-2'>
          <div className='text-sm font-bold text-blog-pink'>일상</div>
          <div>게시물 1 제목제목</div>
          <div className='text-sm text-blog-blue'>
            게시물 1에 대한 내용입니다.게시물 1에 대한 내용입니다.게시물 1에
            대한 내용입니다.게시물 1에 대한 내용입니다.
          </div>
        </div>
        <div className='flex w-full items-center gap-2 pt-3'>
          <CalendarDays className='size-5 text-blog-gray-600' />
          <p className='text-sm font-medium text-blog-gray-600'>
            2025년 1월 14일
          </p>
        </div>
      </div>
    </div>
  );
};
