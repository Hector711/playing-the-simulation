import React from 'react';
import { Props } from '@/types';

export default function ModelAsideLeft({ children, id, title, className }: Props) {
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
