import React from 'react';

export default function ModelMain({ children, title, id }) {
  return (
    <main className='home' id={id}>
      {title && (
        <div>
          <h2 className='impact home'>{title}</h2>
          <hr />
        </div>
      )}
      {children}
    </main>
  );
}
