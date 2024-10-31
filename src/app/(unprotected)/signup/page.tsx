/** @format */

'use client';
import UnprotectedDiv from '@/app/(unprotected)/_components/UnprotectedDiv';
import { useSignUpPhase } from '@/hooks/useSignUpPhase';
import { UsernameForm } from './UsernameForm';
import { CreateSkoolUser } from './CreateSkoolUser';
import { ShowUserProfile } from './ShowUserProfile';
import { useUserProfile } from '@/hooks/useUserProfile';
export default function SignUpPage() {
  const { signUpPhase, setSignUpPhase } = useSignUpPhase();
  const { userProfile } = useUserProfile();
  return (
    <UnprotectedDiv id='signup-page'>
      <header>
        <h3>Registrate en PTS</h3>
      </header>
      <section id='skool-question'>
        {signUpPhase === 0 && (
          <div>
            <p>Ya tienes una cuenta en Skool?</p>
            <div id='skool-buttons'>
              <button onClick={() => setSignUpPhase(1)}>Si</button>
              <button onClick={() => setSignUpPhase(10)}>No</button>
            </div>
          </div>
        )}
        {signUpPhase === 1 && <UsernameForm />}
        {signUpPhase === 2 && <ShowUserProfile />}
        {signUpPhase === 3 && <CreateSkoolUser />}

        {signUpPhase === 10 && (
          <>
            <p>
              Si no tienes una cuenta en Skool asociada a PTS no puedes entrar
              (todavia).
            </p>
            <p>
              Pero en las proximas semanas implementaremos acceso para
              invitados.
            </p>
            <p>Si quieres estar al tanto dejame tu email y te avisaré!</p>
            <input type='email' placeholder='Email' />
          </>
        )}
        <div>
          <button onClick={() => setSignUpPhase(0)}>Volver atrás</button>
        </div>
      </section>
    </UnprotectedDiv>
  );
}
