'use client';

import Container from '../components/Container';
import { testimonials } from '@/utils/data';
import TestimonialColumn from '../components/TestimonialColumn';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className='bg-white'>
      <Container>
        <div className='section-heading-wrapper'>
          <div className='flex justify-center'>
            <p className='tag'>Testimonial</p>
          </div>
          <h2 className='section-title mt-5'>What our users says</h2>
          <p className='section-desc mt-5'>
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>

        {/* testimonial wrapper */}
        <div className='flex justify-center gap-6 mt-10 max-h-[750px] overflows-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]'>
          <motion.div
            animate={{
              translateY: '-100%',
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 5,
              ease: 'linear',
            }}
            className='flex flex-col gap-5 mb-5 '
          >
            <TestimonialColumn columnData={firstColumn} />
          </motion.div>

          <motion.div
            animate={{
              translateY: '-100%',
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 6,
              ease: 'linear',
            }}
            className='flex-col gap-5 mb-5 hidden md:flex'
          >
            <TestimonialColumn columnData={secondColumn} />
          </motion.div>

          <motion.div
            animate={{
              translateY: '-100%',
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 7,
              ease: 'linear',
            }}
            className='flex-col gap-5 mb-6 hidden xl:flex'
          >
            <TestimonialColumn columnData={thirdColumn} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
