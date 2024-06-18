import React from 'react';

export default function ModelMain({ children, title }) {
  return <main id='home'>
    {title && <h2 className='impact home'>{title}</h2>}
    {children}
    </main>;
}
