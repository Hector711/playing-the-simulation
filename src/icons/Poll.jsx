import * as React from 'react';

export default function Poll(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      // width={24}
      // height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M3 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1zM15 9a1 1 0 011-1h4a1 1 0 011 1v10a1 1 0 01-1 1h-4a1 1 0 01-1-1zM9 5a1 1 0 011-1h4a1 1 0 011 1v14a1 1 0 01-1 1h-4a1 1 0 01-1-1zM4 20h14' />
    </svg>
  );
}
