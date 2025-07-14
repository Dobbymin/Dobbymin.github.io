import Link from 'next/link';

import { routerPath } from '@/shared/constants';
import { Search, Sun } from 'lucide-react';

import { Input } from '../ui';

export const Header = () => {
  return (
    <header className='fixed top-0 right-0 left-0 z-100 flex h-header items-center justify-between bg-blog-gray-500 px-header transition-colors'>
      <Link href={routerPath.main}>
        <p className='font-lemon text-3xl'>Dobblog</p>
      </Link>
      <div className='absolute top-1/2 left-1/2 hidden w-[400px] max-w-[60vw] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-3 rounded-sm bg-blog-gray-300 md:flex'>
        <Input
          className='border-none bg-transparent text-sm text-blog-gray-500 shadow-none outline-none placeholder:text-blog-gray-400 focus:border-none focus:ring-0 focus:outline-none'
          type='text'
        />
        <Search className='mr-3 text-blog-gray-500' size={20} />
      </div>
      <div className='flex items-center justify-between gap-5'>
        <Link href={routerPath.about}>
          <p className='font-lemon text-xl'>About</p>
        </Link>
        <Sun className='cursor-pointer text-blog-pink' />
      </div>
    </header>
  );
};
