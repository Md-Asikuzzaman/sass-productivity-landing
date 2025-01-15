'use client';

import clsx from 'clsx';
import { NextPage } from 'next';
import { IconType } from 'react-icons';

interface Props {
  type: 'btn-solid' | 'btn-outlined';
  Icon?: IconType;
  inverse?: string | boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: NextPage<Props> = ({
  type,
  Icon,
  inverse,
  fullWidth,
  className,
  children,
}) => {
  return (
    <button
      className={clsx(
        'btn gap-1',
        fullWidth && 'w-full',
        inverse ? inverse : type,
        className
      )}
    >
      <span>{children}</span>
      {Icon && <Icon size={22} />}
    </button>
  );
};

export default Button;
