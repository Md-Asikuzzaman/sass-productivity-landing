'use client';

import Image from 'next/image';
import React from 'react';
import Container from '../components/Container';
import { logoTickers } from '@/utils/data';
import { motion } from 'framer-motion';
import Slider from './Slider';

const LogoTicker = () => {
  return (
    <section className='py-8 md:py-12 bg-white'>
      <Container className='flex flex-col gap-5 md:gap-8'>
        <div className='flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <Slider
            images={logoTickers}
            initial={{ x: 0 }}
            animate={{
              x: '-100%',
            }}
          />
          <Slider
            images={logoTickers}
            initial={{ x: 0 }}
            animate={{
              x: '-100%',
            }}
          />
        </div>
        <div className='flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <Slider
            images={logoTickers}
            initial={{
              x: '-100%',
            }}
            animate={{ x: 0 }}
          />
          <Slider
            images={logoTickers}
            initial={{
              x: '-100%',
            }}
            animate={{ x: 0 }}
          />
        </div>
      </Container>
    </section>
  );
};

export default LogoTicker;
