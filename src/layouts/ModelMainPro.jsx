import React from 'react';

export default function ModelMainPro({ children, id, title }) {
  return (
    <main className='two-col' id={id} >
      {title && <h2 className='impact home'>{title}</h2>}
      {children}
    </main>
  );
}
