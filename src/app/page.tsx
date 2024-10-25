'use client'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LogIn from '@/components/LogIn';
import { MainTitle } from '@/components/Maintitle';

export default function WellcomePage() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/home');
    }
  }, [user, router]);

  return (
    <div id='wellcome-body'>
      <header className='wellcome'>
        <MainTitle />
      </header>
      <section className='wellcome'>
        <LogIn />
      </section>
    </div>
  );
}
