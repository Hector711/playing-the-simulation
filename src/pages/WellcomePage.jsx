import React from 'react';
import Login from '@/pages/Login';
import Game from '@/icons/Game';

export default function WelcomePage() {
  return (
    <div id='wellcome-body'>
      <header className='wellcome'>
        <MainTitle />
      </header>
      <section className='wellcome'>
        <Login />
      </section>
    </div>
  );
}
export function MainTitle() {
  return (
    <>
      <h1 className='main-title'>Playing The Simulation 2.0</h1>
      <div>
        <h3 className='impact '>Make PTS Great Again</h3>
        <Game />
      </div>
    </>
  );
}
