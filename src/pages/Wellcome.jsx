import React from 'react';
import Login from '@/pages/Login';

export default function Welcome() {
  return (
    <div id='wellcome-body'>
      <header className='wellcome'>
        <h1>Playing The Simulation</h1>
      </header>
      <section className='wellcome'>
        <Login />
      </section>
    </div>
  );
}
