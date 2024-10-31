/** @format */

import React from 'react';
import { PropsTypes } from '@/types';

export default function ModelAsideLeft({
  children,
  id,
  title,
  className,
}: PropsTypes) {
  return (
    <aside className={`aside-left ${className}`} id={id}>
      {title && (
        <>
          <h2 className='impact '>{title}</h2>
          <hr />
        </>
      )}
      {children}
    </aside>
  );
}
