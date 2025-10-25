import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='flex h-footer w-full items-center justify-center bg-blog-gray-300 px-4'>
      <div className='flex flex-col items-start justify-between gap-1'>
        <p className='text-sm text-blog-gray-600 md:text-base'>
          Copyright &copy; 2025 <b>Dobbymin</b> All rights reserved.
        </p>
        <div className='flex flex-wrap items-center justify-center gap-1 font-fira-code text-sm text-blog-gray-600 md:text-base'>
          <span>gmin0701@knu.ac.kr</span>
          <span className='font-bold'>.</span>
          <span className='hidden md:inline'>+82-10-3095-7259</span>
          <span className='hidden font-bold md:inline'>.</span>
          <Link
            className='hover:font-bold hover:underline'
            href='https://github.com/Dobbymin'
          >
            GitHub
          </Link>
          <span className='font-bold'>.</span>
          <Link
            className='hover:font-bold hover:underline'
            href='https://www.linkedin.com/in/dobbymin/'
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};
