'use client';
import UnprotectedDiv from '@/app/(unprotected)/_components/UnprotectedDiv';
import SignUp from '@/app/(unprotected)/_components/SignUp';
import { useState } from 'react';
import SkoolForm from '@/app/(unprotected)/_components/SkoolForm';

export default function SignUpPage() {
  const [skoolUser, setSkoolUser] = useState<boolean | null>(null);
  return (
    <UnprotectedDiv id='signup-page'>
      <header>
        <h3>Registrate en PTS</h3>
      </header>
      <section id='skool-question'>
        <p>Ya tienes una cuenta en Skool?</p>
        <div id='skool-buttons'>
          <button onClick={() => setSkoolUser(true)}>Si</button>
          <button onClick={() => setSkoolUser(false)}>No</button>
        </div>
      </section>
      <section id='sign-up-form'>
        {skoolUser === null ? '' : skoolUser ? <SkoolForm /> : <SignUp />}
      </section>
    </UnprotectedDiv>
  );
}
