import { IconsProps } from '@/types';

export default function Dot(props: IconsProps) {
  const filledDot = false;
  return filledDot ? (
    <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="icons"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 7a5 5 0 11-4.995 5.217L7 12l.005-.217A5 5 0 0112 7z" />
  </svg>
  ) : (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icons'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M8 12a4 4 0 108 0 4 4 0 10-8 0' />
    </svg>
  );
}
