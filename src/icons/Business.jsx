import * as React from 'react';

export default function Business(props) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='profile-icons business-icon'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M11 6a5 3 0 1010 0 5 3 0 10-10 0' />
      <path d='M11 6v4c0 1.657 2.239 3 5 3s5-1.343 5-3V6' />
      <path d='M11 10v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4' />
      <path d='M11 14v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4M7 9H4.5a1.5 1.5 0 000 3h1a1.5 1.5 0 010 3H3M5 15v1m0-8v1' />
    </svg>
  );
}