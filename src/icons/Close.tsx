import { IconsProps } from '@/types';

export default function Close(props: IconsProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2.7}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icons'
      id='close'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M18 6L6 18M6 6l12 12' />
    </svg>
  );
}
