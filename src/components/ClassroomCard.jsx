import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ClassroomCard({ title, description, img, slug }) {
  return (
    <NavLink to={slug}>
      <article className='classroom-card blurr shadoww'>
        <header>
          <img src={img} alt='' />
        </header>
        <section>
          <h3>{title}</h3>
          <h6>{description}</h6>
        </section>
      </article>
    </NavLink>
  );
}
