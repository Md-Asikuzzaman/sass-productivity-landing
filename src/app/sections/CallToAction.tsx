'use client';

import Container from '../components/Container';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from '../components/Button';

const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'
    >
      <Container>
        <div className='section-heading-wrapper relative'>
          <h2 className='section-title'>Sign up for free today</h2>
          <p className='section-desc mt-5'>
            Celebrate the joy accomplishment with an app designed to track your
            progress and motivate your efforts.
          </p>

          {/* UI graphics */}
          <motion.img
            src={'/images/ui/star.png'}
            alt={'star'}
            height={350}
            width={350}
            style={{ translateY: translateY }}
            className='hidden md:block absolute -left-[350px] -top-[140px]'
          />
          <motion.img
            src={'/images/ui/spring.png'}
            alt={'star'}
            height={350}
            width={350}
            style={{ translateY: translateY }}
            className='hidden md:block absolute -right-[330px] -top-[10px]'
          />
        </div>
        <div className='flex justify-center mt-10 gap-2'>
          <Button type='btn-solid'>Get for free</Button>
          <Button type='btn-outlined' Icon={IoIosArrowRoundForward}>
            Learn more
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
