import * as React from 'react';
const controller = true;

export default function Game(props) {
  return !controller ? (
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
      <path d='M2 8a2 2 0 012-2h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2zM6 12h4m-2-2v4M15 11v.01M18 13v.01' />
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
      <path d='M12 5h3.5a5 5 0 010 10H10l-4.015 4.227a2.3 2.3 0 01-3.923-2.035l1.634-8.173A5 5 0 018.6 5H12z' />
      <path d='M14 15l4.07 4.284a2.3 2.3 0 003.925-2.023l-1.6-8.232M8 9v2M7 10h2M14 10h2' />
    </svg>
  );
}
