'use client';

import Image from 'next/image';
import React from 'react';
import Container from '../components/Container';
import { logoTickerData } from '@/utils/data';

const LogoTicker = () => {
  return (
    <section className='py-8 md:py-12 bg-white'>
      <Container className='flex justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
        <div className='flex gap-14 items-center justify-center flex-none'>
          {logoTickerData.map(({ id, imgPath }) => (
            <div key={id}>
              <Image
                src={imgPath}
                alt='logo'
                height={32}
                width={100}
                priority
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LogoTicker;
