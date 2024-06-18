import React from 'react';

export default function ModelMainPro({ children, id, title, className }) {
  return (
    <main className={`pro ${className}`} id={id}>
      {title && (
        <>
          <h2 className='impact'>{title}</h2>
          <hr />
        </>
      )}
      {children}
    </main>
  );
}
