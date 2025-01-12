import React from 'react';
import Container from '../components/Container';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='section-gradient pt-8 pb-20 overflow-hidden'>
      <Container className='md:flex items-center'>
        <div className='md:w-[480px]'>
          <p className='text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg'>
            Version 5.0 is here
          </p>
          <h1 className='text-5xl md:text-7xl font-bold tracking-tighter mt-6 gradient-title'>
            Pathway to productivity
          </h1>
          <p className='text-xl text-[#010D3E] tracking-tight mt-6'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            expedita laborum aliquam earum, fugiat iure tempora consequatur.
          </p>
          <div className='flex gap-1 items-center mt-8'>
            <button className='btn btn-primary'>Get for free</button>
            <button className='btn btn-text gap-1'>
              <span>Learn more</span>
              <Image
                src='/assets/arrow-right.svg'
                height={18}
                width={18}
                alt='arrow-right'
              />
            </button>
          </div>
        </div>
        <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
          <Image
            src={'/assets/cog.png'}
            alt={'cogs'}
            width={0}
            height={0}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 57vw, 33vw'
            style={{ width: 'auto', height: 'auto' }}
            className='md:absolute top-0 bottom-0 lg:right-0 my-auto md:max-w-none md:translate-x-10'
          />

          <Image
            src={'/assets/cylinder.png'}
            alt={'cylinder'}
            width={210}
            height={210}
            className='hidden md:block md:absolute -translate-x-36 -translate-y-5'
          />
          <Image
            src={'/assets/noodle.png'}
            alt={'noodle'}
            width={210}
            height={210}
            className='hidden lg:block md:absolute translate-x-[20px] translate-y-[510px] rotate-[30deg]'
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
