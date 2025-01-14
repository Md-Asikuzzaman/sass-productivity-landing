import clsx from 'clsx';
import { NextPage } from 'next';
import Image from 'next/image';

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
            <span className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2FE,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium'>
              Popular
            </span>
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
      <button
        className={clsx(
          'btn btn-solid w-full mt-[30px]',
          inverse && 'bg-white text-black'
        )}
      >
        {buttonText}
      </button>
      <ul className='flex flex-col gap-5 mt-8'>
        {features.map((feature, i) => (
          <li key={i} className='flex items-center text-sm gap-4'>
            <Image
              className={inverse ? 'bg-white/60 rounded-full' : ''}
              src={'/assets/check.svg'}
              alt={'check'}
              height={24}
              width={24}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TierCard;
