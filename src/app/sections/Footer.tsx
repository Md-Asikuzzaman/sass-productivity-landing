'use client';

import React from 'react';
import Container from '../components/Container';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <Container>
        <div className='inline-flex relative before:content-[""] before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute before:blur-md before:animate-slowSpin'>
          <Image
            src={'/images/logo/logo.png'}
            alt={'Sass logo'}
            height={40}
            width={40}
            className='relative'
          />
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <Link href={'/'}>About</Link>
          <Link href={'/'}>Features</Link>
          <Link href={'/'}>Customers</Link>
          <Link href={'/'}>Pricing</Link>
          <Link href={'/'}>Help</Link>
          <Link href={'/'}>Careers</Link>
        </nav>

        <div className='flex justify-center gap-6 mt-6'>
          <Link href={'https://www.twitter.com'}>
            <Image
              src={'/images/social/social-x.svg'}
              alt={'icon'}
              height={30}
              width={30}
            />
          </Link>

          <Link href={'https://www.instagram.com'}>
            <Image
              src={'/images/social/social-insta.svg'}
              alt={'icon'}
              height={30}
              width={30}
            />
          </Link>

          <Link href={'https://www.linkedin.com'}>
            <Image
              src={'/images/social/social-linkedin.svg'}
              alt={'icon'}
              height={30}
              width={30}
            />
          </Link>

          <Link href={'https://www.pinterest.com'}>
            <Image
              src={'/images/social/social-pin.svg'}
              alt={'icon'}
              height={30}
              width={30}
            />
          </Link>

          <Link href={'https://www.youtube.com'}>
            <Image
              src={'/images/social/social-youtube.svg'}
              alt={'icon'}
              height={30}
              width={30}
            />
          </Link>
        </div>

        <p className='mt-6'>
          &copy; {new Date().getFullYear()} Your Company, Inc. All Rights
          Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
