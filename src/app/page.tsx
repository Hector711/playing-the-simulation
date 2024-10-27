'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/_firebase/config';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { MainTitle } from '@/components/Maintitle';
import Link from 'next/link';
import UnprotectedDiv from '@/app/(unprotected)/_components/UnprotectedDiv';

export default function WellcomePage() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/home');
    }
  }, [user, router]);

  return (
    <UnprotectedDiv id='wellcome-page'>
        <header className='wellcome'>
          <MainTitle />
      </header>
      <section className='wellcome'>
        <div>
          <Link href='/login' className='link'>Iniciar sesion</Link>
          <Link href='/signup' className='link'>Registrarse</Link>
        </div>
        <Link href='/home' className='link' id='guest-link'>Entrar como invitado</Link>
        </section>
    </UnprotectedDiv>
  );
}
