import React from 'react';

export default function ModelAsideRight({ children, title, className, id }) {
  return (
    <aside className={`aside-right ${className}`} id={id}>
      {title && (
        <>
          <h2 className='impact'>{title}</h2>
          <hr />
        </>
      )}
      {children}
    </aside>
  );
}
