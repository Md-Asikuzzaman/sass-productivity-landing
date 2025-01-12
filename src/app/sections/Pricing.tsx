'use client';

import { pricingTiers } from '@/utils/data';
import Container from '../components/Container';
import Image from 'next/image';
import TierCard from '../components/TierCard';

const Pricing = () => {
  return (
    <section className='py-24'>
      <Container>
        <div className='section-heading-wrapper'>
          <h2 className='section-title'>Pricing</h2>
          <p className='section-desc mt-5'>
            Free forever. Upgrade for unlimited, better security, and exclusive
            features.
          </p>
        </div>

        {/* Tier card */}
        <div className='flex flex-col gap-6 items-center justify-center mt-10 lg:flex-row lg:items-end lg:gap-12'>
          {pricingTiers.map((tier, i) => (
            <TierCard key={i} tier={tier} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
