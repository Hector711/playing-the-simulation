import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ModelMain({ className, children, title, id, nav }) {
  const isActive = ({ isActive }) =>
    isActive ? 'active-link' : 'inactive-link';
  return (
    <main className={className} id={id}>
      {nav && (
        <nav id='main-nav'>
          {nav.map((item, i) => (
            <NavLink
              key={i}
              to={`/${item.page}/${item.slug}`}
              className={isActive}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      )}
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
