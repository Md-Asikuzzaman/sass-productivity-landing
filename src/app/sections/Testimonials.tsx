'use client';

import Container from '../components/Container';
import { testimonials } from '@/utils/data';
import TestimonialColumn from '../components/TestimonialColumn';

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
        <div className='flex justify-center gap-6'>
          <TestimonialColumn columnData={firstColumn} />
          <TestimonialColumn
            columnData={secondColumn}
            className='hidden md:flex'
          />
          <TestimonialColumn
            columnData={thirdColumn}
            className='hidden xl:flex'
          />
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
