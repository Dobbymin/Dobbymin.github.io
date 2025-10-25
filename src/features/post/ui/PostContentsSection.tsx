import { MDXRemote } from 'next-mdx-remote/rsc';

import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

import { mdxComponents } from '@/shared';

type PostContentsSectionProps = {
  content: string;
};

export const PostContentsSection = ({ content }: PostContentsSectionProps) => {
  return (
    <article className='w-full bg-white p-4 md:p-8'>
      <div className='prose prose-lg w-full max-w-none'>
        <MDXRemote
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypePrism],
            },
          }}
          source={content}
        />
      </div>
    </article>
  );
};
