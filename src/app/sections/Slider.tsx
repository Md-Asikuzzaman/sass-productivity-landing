'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  images: {
    imgPath: string;
  }[];

  initial: any;
  animate: any;
}

const Slider: NextPage<Props> = ({ images, initial, animate }) => {
  return (
    <motion.div
      className='flex gap-14 items-center justify-center flex-none pr-14'
      initial={initial}
      animate={animate}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {images.map(({ imgPath }, i) => (
        <Image
          key={i}
          src={imgPath}
          alt='logo'
          height={50}
          width={120}
          priority
        />
      ))}
    </motion.div>
  );
};

export default Slider;
