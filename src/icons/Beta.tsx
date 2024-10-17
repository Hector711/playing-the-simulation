import { IconsProps } from '@/types';

export default function Beta(props: IconsProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icons'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M8 22V8a4 4 0 014-4h.5a3.5 3.5 0 010 7H12h.5A4.5 4.5 0 118 15.5V15' />
    </svg>
  );
}
