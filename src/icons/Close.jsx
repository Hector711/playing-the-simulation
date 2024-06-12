import * as React from 'react';

export default function Close(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-x'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M18 6L6 18M6 6l12 12' />
    </svg>
  );
}
