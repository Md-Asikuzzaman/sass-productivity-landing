import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import clsx from 'clsx';

import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sass Productivity Landing Page',
  description: 'Template Created by Dev Asik.',
  icons: {
    icon: '/images/logo/logo.png',
  },
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
