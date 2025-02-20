import clsx from 'clsx';
import { NextPage } from 'next';
import { IoMdCheckmark } from 'react-icons/io';
import { motion } from 'framer-motion';
import Button from './Button';

interface Props {
  tier: {
    title: string;
    monthlyPrice: number;
    buttonText: string;
    popular: boolean;
    inverse: boolean;
    features: string[];
  };
}

const TierCard: NextPage<Props> = ({
  tier: { title, monthlyPrice, buttonText, popular, inverse, features },
}) => {
  return (
    <div
      className={clsx('card', inverse && 'bg-black border-black text-white')}
    >
      <div className='flex justify-between'>
        <h3
          className={clsx(
            'text-lg font-bold text-black/50',
            inverse && 'text-white/60'
          )}
        >
          {title}
        </h3>
        {popular && (
          <div
            className='inline-flex text-sm px-4 py-1.5
        rounded-xl border border-white/20'
          >
            <motion.span
              className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2FE,#3BFFFF,#DD7DDF,#DD7DDF,#E1CD86,#BBCB92,#71C2FE,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium'
              animate={{
                backgroundPositionX: '-100%',
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: 'linear',
                repeatType: 'loop',
              }}
            >
              Popular
            </motion.span>
          </div>
        )}
      </div>
      <div className='flex items-baseline gap-1 mt-[30px]'>
        <span className='text-4xl font-bold tracking-tighter leading-none'>
          ${monthlyPrice}
        </span>
        <span
          className={clsx(
            'tracking-tight font-bold text-black/50',
            inverse && 'text-white/60'
          )}
        >
          /month
        </span>
      </div>

      <Button
        type='btn-solid'
        fullWidth
        inverse={inverse && 'bg-white text-black'}
        className='mt-5'
      >
        {buttonText}
      </Button>

      <ul className='flex flex-col gap-5 mt-8'>
        {features.map((feature, i) => (
          <li key={i} className='flex items-center text-sm gap-4'>
            <IoMdCheckmark size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TierCard;
