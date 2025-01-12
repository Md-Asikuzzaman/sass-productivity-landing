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
              src={'/assets/logo.png'}
              height={40}
              width={40}
              alt={'Logo'}
            />
          </Link>
          <Image
            src={'/assets/menu.svg'}
            height={30}
            width={30}
            alt={'Logo'}
            className='md:hidden cursor-pointer'
          />
          <nav className='hidden md:flex gap-6 text-black/60 items-center'>
            <Link href={'/'}>About</Link>
            <Link href={'/'}>Features</Link>
            <Link href={'/'}>Customers</Link>
            <Link href={'/'}>Updates</Link>
            <Link href={'/'}>Help</Link>
            <button className='btn btn-primary'>Get for free</button>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;
