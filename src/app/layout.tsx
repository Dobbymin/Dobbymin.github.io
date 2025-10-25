import type { Metadata } from 'next';
import { Fira_Code, Geist, Geist_Mono, Lemon } from 'next/font/google';
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

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const lemon = Lemon({
  variable: '--font-lemon',
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: {
    default: 'Dobby is Free',
    template: '%s | Dobby is Free',
  },
  description:
    '김도비의 개발 블로그 - 프론트엔드 개발, 웹 기술, 그리고 일상의 기록',
  keywords: [
    '개발 블로그',
    '프론트엔드',
    'Next.js',
    'React',
    'TypeScript',
    '김도비',
    'Dobby',
  ],
  authors: [{ name: '김도비', url: 'https://github.com/Dobbymin' }],
  creator: '김도비',
  publisher: '김도비',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://dobbymin.github.io',
    title: 'Dobby is Free',
    description:
      '김도비의 개발 블로그 - 프론트엔드 개발, 웹 기술, 그리고 일상의 기록',
    siteName: 'Dobby is Free',
    images: [
      {
        url: 'https://dobbymin.github.io/logo.png',
        width: 1200,
        height: 630,
        alt: 'Dobby is Free Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dobby is Free',
    description:
      '김도비의 개발 블로그 - 프론트엔드 개발, 웹 기술, 그리고 일상의 기록',
    images: ['https://dobbymin.github.io/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pretendard.variable} ${lemon.variable} ${firaCode.variable} antialiased`}
      >
        <BlogLayout>{children}</BlogLayout>
        {/* <main className='w-full items-center justify-center'></main> */}
        <Toaster />
      </body>
    </html>
  );
}
