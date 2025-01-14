'use client';

import Image from 'next/image';
import React from 'react';
import Container from '../components/Container';
import { logoTickers } from '@/utils/data';
import { motion } from 'framer-motion';

const LogoTicker = () => {
  return (
    <section className='py-8 md:py-12 bg-white'>
      <Container className='flex justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
        <motion.div
          className='flex gap-14 items-center justify-center flex-none pr-14'
          animate={{
            translateX: '-50%',
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {[
            ...logoTickers,
            ...logoTickers,
            ...logoTickers,
            ...logoTickers,
            ...logoTickers,
          ].map(({ imgPath }, i) => (
            <Image
              key={i}
              src={imgPath}
              alt='logo'
              height={32}
              width={100}
              priority
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default LogoTicker;
