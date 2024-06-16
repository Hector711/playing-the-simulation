import React from 'react';

export default function ModelAsideLeft({ children, id, title, className}) {
  return (
    <aside className={`aside-left ${className}`} id={id} >
      {title ? <h2 className='impact'>{title}</h2> : ''}
      {children}
    </aside>
  );
}
