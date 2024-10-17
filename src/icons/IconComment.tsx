import { IconsProps } from '@/types';

export default function Comments(props: IconsProps) {
  return (
    <svg
      // width={24}
      // height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className=' icons'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M8 9h8M8 13h6M18 4a3 3 0 013 3v8a3 3 0 01-3 3h-5l-5 3v-3H6a3 3 0 01-3-3V7a3 3 0 013-3h12z' />
    </svg>
  );
}
