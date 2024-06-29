import * as React from 'react';

export default function Omega(props) {
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
      <path d='M4 19h5v-1a7.35 7.35 0 116 0v1h5' />
    </svg>
  );
}
