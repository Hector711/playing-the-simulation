import React from 'react';
import Login from '@/pages/Login';

export default function WelcomePage() {
  return (
    <div id='wellcome-body'>
      <header className='wellcome'>
        <h1>Playing The Simulation</h1>
        <h3 className='impact'>Make PTS Great Again</h3>
      </header>
      <section className='wellcome'>
        <Login />
      </section>
    </div>
  );
}
