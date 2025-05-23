import type { Metadata } from 'next';
import { Geist, Geist_Mono, Lemon } from 'next/font/google';
import localFont from 'next/font/local';

import { Toaster } from '@/shared';
import { BlogLayout } from '@/widgets';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const suit = localFont({
  src: '../../public/fonts/SUIT-Variable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-suit',
});

const lemon = Lemon({
  variable: '--font-lemon',
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Dobby is Free',
  description: '김도비의 개인 블로그',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lemon.variable} ${pretendard.variable} ${suit.variable} antialiased`}
      >
        <BlogLayout>{children}</BlogLayout>
        {/* <main className='w-full items-center justify-center'></main> */}
        <Toaster />
      </body>
    </html>
  );
}
