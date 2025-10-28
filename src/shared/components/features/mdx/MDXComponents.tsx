import Image, { ImageProps } from 'next/image';

import type { MDXComponents } from 'mdx/types';

import { CustomImageProps } from '../../../types';
import { YouTube } from '../youtube';

export const mdxComponents: MDXComponents = {
  // 제목 스타일링 (반응형)
  h1: ({ children }) => (
    <h1 className='mb-6 border-b-2 border-blog-gray-400 pt-4 pb-3 text-2xl font-bold text-blog-black md:text-4xl'>
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className='mt-8 mb-4 text-xl font-semibold text-blog-black md:text-3xl'>
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className='mt-6 mb-3 text-lg font-semibold text-blog-black md:text-2xl'>
      {children}
    </h3>
  ),

  // 본문 텍스트
  p: ({ children }) => (
    <p className='mb-4 text-sm leading-relaxed text-blog-black md:text-base'>
      {children}
    </p>
  ),

  // 리스트
  ul: ({ children }) => (
    <ul className='mb-4 list-inside list-disc space-y-2 text-sm text-blog-black md:text-base'>
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className='mb-4 list-inside list-decimal space-y-2 text-sm text-blog-black md:text-base'>
      {children}
    </ol>
  ),

  li: ({ children }) => <li className='ml-4'>{children}</li>,

  // 강조
  strong: ({ children }) => (
    <strong className='font-bold text-blog-blue'>{children}</strong>
  ),

  em: ({ children }) => <em className='text-blog-purple italic'>{children}</em>,

  // 인용구
  blockquote: ({ children }) => (
    <blockquote className='my-4 border-l-4 border-blog-green bg-blog-gray-100 py-2 pl-4 text-sm text-blog-black md:text-base [&>:last-child]:mb-0'>
      {children}
    </blockquote>
  ),

  // 코드 블록
  code: ({ children, className }) => {
    // 코드 블록 내부의 코드인 경우 (pre > code)
    if (className?.includes('language-')) {
      return <code className={className}>{children}</code>;
    }
    // 인라인 코드
    return (
      <code className='rounded bg-blog-gray-200 px-2 py-1 font-mono text-xs text-blog-pink md:text-sm'>
        {children}
      </code>
    );
  },

  pre: ({ children }) => (
    <pre className='mb-4 overflow-x-auto rounded-lg bg-[#2d2d2d] p-4 text-sm shadow-md'>
      {children}
    </pre>
  ),

  img: (props) => (
    <Image
      {...(props as ImageProps)}
      className='mx-auto mb-4 h-auto rounded-lg'
      height={600}
      width={600}
    />
  ),

  // 링크
  a: ({ href, children }) => (
    <a
      className='hover:text-blog-purple text-sm text-blog-blue underline underline-offset-2 transition-all hover:underline-offset-4 md:text-base'
      href={href}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      target={href?.startsWith('http') ? '_blank' : undefined}
    >
      {children}
    </a>
  ),

  // 수평선
  hr: () => <hr className='my-8 border-blog-gray-400' />,

  // 테이블
  table: ({ children }) => (
    <div className='mb-4 overflow-x-auto'>
      <table className='min-w-full border-collapse border border-blog-gray-400'>
        {children}
      </table>
    </div>
  ),

  thead: ({ children }) => (
    <thead className='bg-blog-gray-200'>{children}</thead>
  ),

  tbody: ({ children }) => <tbody>{children}</tbody>,

  tr: ({ children }) => (
    <tr className='border-b border-blog-gray-400'>{children}</tr>
  ),

  th: ({ children }) => (
    <th className='border border-blog-gray-400 px-4 py-2 text-left text-sm font-semibold text-blog-black md:text-base'>
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className='border border-blog-gray-400 px-4 py-2 text-sm text-blog-black md:text-base'>
      {children}
    </td>
  ),

  YouTube,
};
