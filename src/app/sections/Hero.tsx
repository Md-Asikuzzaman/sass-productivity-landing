'use client';

import React, { useRef } from 'react';
import Container from '../components/Container';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/Button';
import Image from 'next/image';

const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className='section-gradient pt-8 pb-20 overflow-x-clip'
    >
      <Container className='md:flex items-center'>
        <div className='md:w-[480px]'>
          <p className='tag'>Version 5.0 is here</p>
          <h1 className='text-5xl md:text-7xl font-bold tracking-tighter mt-6 gradient-title'>
            Pathway to productivity
          </h1>
          <p className='text-xl text-[#010D3E] tracking-tight mt-6'>
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className='flex gap-1 items-center mt-8'>
            <Button type='btn-solid'>Get for free</Button>
            <Button type='btn-outlined' Icon={IoIosArrowRoundForward}>
              Learn More
            </Button>
          </div>
        </div>

        {/* UI graphics */}
        <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
          <motion.div
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 3.5,
              ease: 'easeInOut',
            }}
          >
            <Image
              src={'/images/ui/cog.png'}
              alt={'cogs'}
              width={0} // for nextjs image component...
              height={0}
              sizes='(max-width: 768px) 100vw, (max-width: 1024px) 67vw, 580px'
              style={{ width: 'auto', height: 'auto' }}
              className='md:absolute md:h-full md:max-w-none md:-left-6 lg:left-[100px]'
              priority
            />
          </motion.div>
          <motion.img
            src={'/images/ui/cylinder.png'}
            alt={'cylinder'}
            width={210}
            height={210}
            className='hidden md:block md:absolute -top-[40px] -left-[150px] lg:-left-[100px]'
            style={{ translateY: translateY }}
          />
          <motion.img
            src={'/images/ui/noodle.png'}
            alt={'noodle'}
            width={210}
            height={210}
            className='hidden lg:block absolute top-[590px] left-[600px]  rotate-[40deg]'
            style={{ translateY: translateY, rotate: '40deg' }}
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
