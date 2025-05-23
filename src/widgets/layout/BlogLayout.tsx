import { Footer, Header } from '@/shared';

type Props = {
  children: React.ReactNode;
};

export const BlogLayout = ({ children }: Props) => {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center'>
      <Header />
      <div className='flex h-content w-full'>{children}</div>
      <Footer />
    </div>
  );
};
