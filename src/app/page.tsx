/** @format */

'use client';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '@/app/_firebase/clientConfig';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
import { MainTitle } from '@/components/Maintitle';
import Link from 'next/link';
import UnprotectedDiv from '@/app/(unprotected)/_components/UnprotectedDiv';
import GuestLink from '@/app/(unprotected)/login/_components/GuestLink';

export default function WellcomePage() {
  return (
    <UnprotectedDiv id='wellcome-page'>
      <header className='wellcome'>
        <MainTitle />
      </header>
      <section className='wellcome'>
        <div>
          <Link href='/login' className='link'>
            Iniciar sesion
          </Link>
          <Link href='/signup' className='link'>
            Registrarse
          </Link>
        </div>
        <GuestLink />
      </section>
    </UnprotectedDiv>
  );
}
