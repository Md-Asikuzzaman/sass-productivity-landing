import clsx from 'clsx';
import { NextPage } from 'next';
import Image from 'next/image';

interface Props {
  columnData: {
    text: string;
    imageSrc: string;
    name: string;
    username: string;
  }[];
  className?: string;
}

const TestimonialColumn: NextPage<Props> = ({ columnData, className }) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]',

        className
      )}
    >
      {columnData.map(({ text, imageSrc, name, username }, i) => (
        <div key={i} className='card'>
          <p>{text}</p>
          <div className='flex items-center gap-2 mt-5'>
            <Image
              src={imageSrc}
              alt={name}
              height={40}
              width={40}
              className='rounded-full'
            />
            <div className='flex flex-col'>
              <div className='font-medium tracking-tight leading-5'>{name}</div>
              <div className='leading-5 tracking-tight text-black/50'>
                {username}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialColumn;
