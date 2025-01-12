import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-center items-center py-3 bg-black text-white'>
      <div className='inline-flex gap-1 items-center'>
        <p>Get started for free</p>
        <Image
          className='bg-white text-white'
          src='/assets/arrow-right.svg'
          height={18}
          width={18}
          alt='arrow-right'
        />
      </div>
    </div>
  );
};

export default Header;
