'use client';

import Image from 'next/image';
import Container from '../components/Container';
import { IoIosArrowRoundForward } from 'react-icons/io';

const CallToAction = () => {
  return (
    <section className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'>
      <Container>
        <div className='section-heading-wrapper relative'>
          <h2 className='section-title'>Sign up for free today</h2>
          <p className='section-desc mt-5'>
            Celebrate the joy accomplishment with an app designed to track your
            progress and motivate your efforts.
          </p>

          {/* UI graphics */}
          <Image
            src={'/images/ui/star.png'}
            alt={'star'}
            height={350}
            width={350}
            className='hidden md:block absolute -left-[350px] -top-[140px]'
          />
          <Image
            src={'/images/ui/spring.png'}
            alt={'star'}
            height={350}
            width={350}
            className='hidden md:block absolute -right-[330px] -top-[10px]'
          />
        </div>
        <div className='flex justify-center mt-10 gap-2'>
          <button className='btn btn-solid'>Get for free</button>
          <button className='btn btn-outlined gap-1'>
            <span>Learn more</span>
            <IoIosArrowRoundForward size={22} />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
