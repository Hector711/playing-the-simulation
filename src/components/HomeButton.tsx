'use client';
import Link from 'next/link';

export default function HomeButton() {
  return (
    <header id='home-button'>
      <Link href='/home'>
        <h1 className='main-title'>Playing The Simulation</h1>
      </Link>
    </header>
  );
}
