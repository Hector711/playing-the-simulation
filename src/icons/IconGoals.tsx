import { IconsProps } from '@/types';

export default function Goal(props: IconsProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={34}
      height={34}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      id='goals-icon'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M11 12a1 1 0 102 0 1 1 0 10-2 0M12 7a5 5 0 105 5M13 3.055A9 9 0 1020.941 11' />
      <path d='M15 6v3h3l3-3h-3V3zM15 9l-3 3' />
    </svg>
  );
}
