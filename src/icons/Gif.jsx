import * as React from 'react';

export default function Gif(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      // className="icon"
      id='gif'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M8 8H6a2 2 0 00-2 2v4a2 2 0 002 2h2v-4H7M12 8v8M16 12h3M20 8h-4v8' />
    </svg>
  );
}
