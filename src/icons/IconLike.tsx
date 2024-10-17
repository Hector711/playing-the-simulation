import { IconsProps } from '@/types';

export default function Like(props: IconsProps) {
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
      className='icons'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M19.5 12.572L12 20l-7.5-7.428A5 5 0 1112 6.006a5 5 0 117.5 6.572' />
    </svg>
  );
}
