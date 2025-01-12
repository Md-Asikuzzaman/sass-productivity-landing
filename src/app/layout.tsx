import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import clsx from 'clsx';

import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sass Landing Page',
  description: 'Template Created by someone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx('antialiased bg-[#EAEEFE]', dmSans.className)}>
        {children}
      </body>
    </html>
  );
}
