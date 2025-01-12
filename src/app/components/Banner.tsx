'use client';

import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='flex justify-center items-center py-3 bg-black text-white gap-3'>
      <p className='text-white/60 hidden md:block'>
        Streamline your workflow and boost your productivity!
      </p>
      <div className='inline-flex gap-1 items-center'>
        <p>Get started for free</p>
        <Image
          className='bg-white rounded-full'
          src='/assets/arrow-right.svg'
          height={18}
          width={18}
          alt='arrow-right'
        />
      </div>
    </div>
  );
};

export default Banner;
