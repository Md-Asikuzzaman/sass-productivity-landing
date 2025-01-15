'use client';

import React, { useRef } from 'react';
import Container from '../components/Container';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  return (
    <section
      ref={sectionRef}
      className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'
    >
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

        {/* UI graphics */}
        <div className='relative'>
          <Image
            className='mt-10'
            src={'/images/logo/product-image.png'}
            alt={'product-image'}
            width={0}
            height={0}
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw'
            style={{ width: 'auto', height: 'auto' }}
          />
          <motion.img
            className='hidden md:block absolute -top-[100px] -right-[130px]'
            src={'/images/ui/pyramid.png'}
            alt={'pyramid'}
            width={262}
            height={262}
            style={{ translateY: translateY }}
          />
          <motion.img
            className='hidden md:block absolute -left-[160px] lg:-left-[120px] bottom-[100px] lg:bottom-[200px]'
            src={'/images/ui/tube.png'}
            alt={'tube'}
            width={262}
            height={262}
            style={{ translateY: translateY }}
          />
        </div>
      </Container>
    </section>
  );
};

export default ProductShowcase;
