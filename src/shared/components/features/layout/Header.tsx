import Image from 'next/image';
import Link from 'next/link';

import { Search, Sun } from 'lucide-react';

import { routerPath } from '../../../constants';
import { Input } from '../../ui';

export const Header = () => {
  return (
    <header className='fixed top-0 right-0 left-0 z-100 flex items-center justify-center bg-blog-gray-500 transition-colors'>
      <div className='relative flex h-header w-full max-w-7xl items-center justify-between px-4 md:px-8'>
        <Link href={routerPath.main}>
          <div className='flex items-center gap-4'>
            <Image
              alt='Dobblog Logo'
              className='rounded-full'
              height={40}
              src='/logo.png'
              width={40}
            />
            <p className='hidden font-lemon text-xl md:block md:text-3xl'>
              Dobblog
            </p>
          </div>
        </Link>
        <div className='absolute top-1/2 left-1/2 hidden w-[400px] max-w-[60vw] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-3 rounded-sm bg-blog-gray-100 md:flex'>
          <Input
            className='border-none bg-transparent text-sm text-blog-gray-500 shadow-none outline-none placeholder:text-blog-gray-400 focus:border-none focus:ring-0 focus:outline-none'
            type='text'
          />
          <Search className='mr-3 text-blog-gray-500' size={20} />
        </div>
        <div className='flex items-center justify-between gap-3 md:gap-5'>
          <Link href={routerPath.about}>
            <p className='font-lemon text-base md:text-xl'>About</p>
          </Link>
          <Sun className='cursor-pointer text-blog-pink' size={20} />
        </div>
      </div>
    </header>
  );
};
