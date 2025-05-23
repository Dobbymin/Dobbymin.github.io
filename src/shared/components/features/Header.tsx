import Link from 'next/link';

import { routerPath } from '@/shared/constants';
import { Sun } from 'lucide-react';

export const Header = () => {
  return (
    <header className='fixed top-0 right-0 left-0 z-100 flex h-header items-center justify-between border-b-2 border-[#AFAFAF] bg-white px-header shadow-sm transition-colors'>
      <Link href={routerPath.main}>
        <p className='font-lemon text-3xl'>Dobblog</p>
      </Link>
      <div className='flex items-center justify-between gap-5'>
        <Link href={routerPath.about}>
          <p className='text-xl font-semibold'>About</p>
        </Link>
        <Sun className='cursor-pointer' />
      </div>
    </header>
  );
};
