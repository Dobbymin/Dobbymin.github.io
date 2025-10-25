import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='flex h-footer w-full items-center justify-center bg-blog-gray-300'>
      <div className='flex flex-col items-start justify-between gap-1'>
        <p className='text-blog-gray-600'>
          Copyright &copy; 2025 <b>Dobbymin</b> All rights reserved.
        </p>
        <div className='flex items-center justify-center gap-1 font-fira-code text-blog-gray-600'>
          <span>gmin0701@knu.ac.kr</span>
          <span className='font-bold'>.</span>
          <span>+82-10-3095-7259</span>
          <span className='font-bold'>.</span>
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
