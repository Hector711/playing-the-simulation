import React from 'react';

export default function ModelMainPro({ children, id, title }) {
  return (
    <main className='pro' id={id}>
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
