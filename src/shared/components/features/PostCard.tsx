import Image from 'next/image';

import { Calendar } from 'lucide-react';

export const PostCard = () => {
  return (
    <div className='flex h-[400px] w-[320px] flex-col bg-white shadow-lg transform-content'>
      <div className='h-[200px] w-full bg-gray-200'>
        <Image
          alt='thumbnail'
          height={200}
          src='https://picsum.photos/320/200'
          width={320}
        />
      </div>
      <div className='flex h-full w-full flex-col justify-between p-3'>
        <div>
          <div>일상</div>
          <div>게시물 1 제목제목</div>
          <div>게시물 1에 대한 내용입니다.</div>
        </div>
        <div className='flex w-full gap-3 align-middle'>
          <Calendar />
          <p>2025년 1월 14일</p>
        </div>
      </div>
    </div>
  );
};
