'use client';

import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Banner = () => {
  return (
    <div className='flex justify-center items-center py-3 bg-black text-white gap-3'>
      <p className='text-white/60 hidden md:block'>
        Streamline your workflow and boost your productivity!
      </p>
      <div className='inline-flex gap-1 items-center'>
        <p>Get started for free</p>
        <IoIosArrowRoundForward size={22} />
      </div>
    </div>
  );
};

export default Banner;
