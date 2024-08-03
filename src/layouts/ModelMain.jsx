import React from 'react';
import Link from 'next/link';

export default function ModelMain({ className, children, title, id, nav }) {
  
  return (
    <main className={className} id={id}>
      {nav && (
        <nav id='main-nav'>
          {nav.map((item, i) => (
            <Link
              key={i}
              href={`/${item.page}/${item.slug}`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
      {title && (
        <header className={className}>
          <h2 className='impact home'>{title}</h2>
          <hr />
        </header>
      )}
      {children}
    </main>
  );
}
