'use client';

import React from 'react';
import Container from '../components/Container';
import Image from 'next/image';

const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
      <Container>
        <div className='section-heading-wrapper'>
          <div className='flex justify-center'>
            <p className='tag'>Boost your productivity</p>
          </div>
          <h2 className='section-title mt-5'>
            A more efficient way to track progress
          </h2>
          <p className='section-desc mt-5'>
            Effortless turn your ideas into functional, responsive, SaaS website
            in just minutes with this template.
          </p>
        </div>

        <div className='relative'>
          <Image
            className='mt-10'
            src={'/assets/product-image.png'}
            alt={'product-image'}
            width={0}
            height={0}
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw'
            style={{ width: 'auto', height: 'auto' }}
          />
          <Image
            className='hidden md:block absolute top-0 right-0 -translate-y-32 translate-x-32'
            src={'/assets/pyramid.png'}
            alt={'pyramid'}
            width={262}
            height={262}
          />
          <Image
            className='hidden md:block absolute bottom-0 left-0 -translate-y-32 -translate-x-36'
            src={'/assets/tube.png'}
            alt={'tube'}
            width={262}
            height={262}
          />
        </div>
      </Container>
    </section>
  );
};

export default ProductShowcase;
