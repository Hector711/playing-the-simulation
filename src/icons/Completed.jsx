import * as React from 'react';

export default function Completed({ completed }) {
  return completed ? (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icons'
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M8.56 3.69a9 9 0 00-2.92 1.95M3.69 8.56A9 9 0 003 12M3.69 15.44a9 9 0 001.95 2.92M8.56 20.31A9 9 0 0012 21M15.44 20.31a9 9 0 002.92-1.95M20.31 15.44A9 9 0 0021 12M20.31 8.56a9 9 0 00-1.95-2.92M15.44 3.69A9 9 0 0012 3' />
    </svg>
  ) : (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      className='icons completed'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zm-1.293 5.953a1 1 0 00-1.32-.083l-.094.083L11 12.585l-1.293-1.292-.094-.083a1 1 0 00-1.403 1.403l.083.094 2 2 .094.083a1 1 0 001.226 0l.094-.083 4-4 .083-.094a1 1 0 00-.083-1.32z' />
    </svg>
  );
}
