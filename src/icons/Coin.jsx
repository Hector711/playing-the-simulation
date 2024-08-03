import * as React from 'react';

export default function Coin(props) {
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
      <path d='M3 12a9 9 0 1018 0 9 9 0 10-18 0' />
      <path d='M14.8 9A2 2 0 0013 8h-2a2 2 0 100 4h2a2 2 0 110 4h-2a2 2 0 01-1.8-1M12 7v10' />
    </svg>
  );
}
