import React from 'react';
import Login from '@/pages/Login';
import Game from '@/icons/Game';

export default function WelcomePage() {
  return (
    <div id='wellcome-body'>
      <header className='wellcome'>
        <h1 className='main-title'>Playing The Simulation</h1>
        <div>
          <h3 className='impact '>Make PTS Great Again</h3>
          <Game />
        </div>
      </header>
      <section className='wellcome'>
        <Login />
      </section>
    </div>
  );
}
