import { Footer, Header } from '@/shared';

type Props = {
  children: React.ReactNode;
};

export const BlogLayout = ({ children }: Props) => {
  return (
    <div className='w-full bg-blog-gray-100'>
      <Header />
      <main className='pt-16'>
        <div className='flex min-h-[calc(100vh-4rem)] flex-col'>
          <div className='mb-16 flex-grow'>{children}</div>
          <Footer />
        </div>
      </main>
    </div>
  );
};
