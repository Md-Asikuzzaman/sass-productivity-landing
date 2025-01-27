import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import clsx from 'clsx';

import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
});

// export const metadata: Metadata = {
//   title: 'Sass Productivity Landing Page',
//   description: 'Template Created by Dev Asik.',
//   icons: {
//     icon: '/images/logo/logo.png',
//   },
// };

export const metadata: Metadata = {
  title: 'Sass Productivity Landing Page',
  description: 'Pathway to productivity',
  openGraph: {
    title: 'Sass Productivity Landing Page',
    description: 'Pathway to productivity',
    url: 'https://sass-productivity-landing.vercel.app',
    siteName: 'Sass Productivity',
    images: [
      {
        url: 'https://sass-productivity-landing.vercel.app/images/logo/logo.png', // Absolute URL for OG image
        width: 1200, // Recommended size for OG
        height: 630,
        alt: 'Sass Productivity Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sass Productivity Landing Page',
    description: 'Pathway to productivity',
    images: [
      'https://sass-productivity-landing.vercel.app/images/logo/logo.png',
    ], // Absolute URL for Twitter image
  },
};

export const viewport: Viewport = {
  themeColor: 'black',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='/images/logo/logo.png'
          type='image/x-icon'
          sizes='16x16'
        />
      </head>
      <body className={clsx('antialiased bg-[#EAEEFE]', dmSans.className)}>
        {children}
      </body>
    </html>
  );
}
