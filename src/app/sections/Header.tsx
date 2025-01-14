'use client';

import Image from 'next/image';
import React from 'react';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-md z-30'>
      <Banner />
      <div className='py-5'>
        <Container className='flex justify-between items-center'>
          <Link href={'/'}>
            <Image
              src={'/images/logo/logo.png'}
              height={40}
              width={40}
              alt={'Logo'}
            />
          </Link>
          <Image
            src={'/images/logo/menu.svg'}
            height={30}
            width={30}
            alt={'Logo'}
            className='md:hidden cursor-pointer'
          />
          <nav className='hidden md:flex gap-6 items-center'>
            <Link
              href={'/'}
              className='text-black/60 hover:text-black transition-colors'
            >
              About
            </Link>
            <Link
              href={'/'}
              className='text-black/60 hover:text-black transition-colors'
            >
              Features
            </Link>
            <Link
              href={'/'}
              className='text-black/60 hover:text-black transition-colors'
            >
              Customers
            </Link>
            <Link
              href={'/'}
              className='text-black/60 hover:text-black transition-colors'
            >
              Updates
            </Link>
            <Link
              href={'/'}
              className='text-black/60 hover:text-black transition-colors'
            >
              Help
            </Link>
            <button className='btn btn-solid'>Get for free</button>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;
