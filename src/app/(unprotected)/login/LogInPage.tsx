/** @format */

import React from 'react';
import LoginForm from './_components/LoginForm';
import UnprotectedDiv from '@/app/(unprotected)/_components/UnprotectedDiv';

export default function LoginPage() {
  return (
    <UnprotectedDiv id='login-page'>
      <header>
        <h3>Inicia Sesión en PTS</h3>
      </header>
      <section>
        <LoginForm />
      </section>
    </UnprotectedDiv>
  );
}
