import React from 'react';

export default function ClassCard({ title, description, img }) {
  return (
    <div className='classroom-card'>
      <img src={img} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
