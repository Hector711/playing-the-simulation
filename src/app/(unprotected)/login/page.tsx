import React from 'react';
import LogIn from '@/app/(unprotected)/_components/LogIn';
import UnprotectedDiv from '@/app/(unprotected)/_components/UnprotectedDiv';

export default function LoginPage() {
  return (
    <UnprotectedDiv id='login-page'>
      <header>
        <h3>Inicia Sesión en PTS</h3>
      </header>
      <section>
        <LogIn />
      </section>
    </UnprotectedDiv>
  );
}

