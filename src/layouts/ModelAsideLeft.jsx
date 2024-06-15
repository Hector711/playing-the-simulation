import React from 'react';

export default function ModelAsideLeft({ children, id, titlePage }) {
  return (
    <aside className='aside-left' id={id}>
      {titlePage ? <h2 className='impact'>{titlePage}</h2> : ''}
      {children}
    </aside>
  );
}
