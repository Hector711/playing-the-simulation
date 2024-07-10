import React from 'react';

export default function ModelAsideRight({ children, title, className, id }) {
  return (
    <aside className={`aside-right ${className}`} id={id}>
      {title && (
        <>
          <header>
            <h3 className='impact'>{title}</h3>
          </header>
          {/* <hr /> */}
        </>
      )}
      <section>{children}</section>
    </aside>
  );
}
