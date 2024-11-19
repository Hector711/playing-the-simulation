/** @format */

import { MainTitle } from '@/components/Maintitle';
import UnprotectedDiv from '@/app/(unprotected)/_components/UnprotectedDiv';
import LogInGoogleButton from '@/app/(unprotected)/_components/LogInGoogleButton';
import LinkButton from '@/components/LinkButton';
export default function WellcomePage() {
  return (
    <UnprotectedDiv id='wellcome-page'>
      <header className='wellcome'>
        <MainTitle />
      </header>
      <section className='wellcome'>
        <LogInGoogleButton />
        <LinkButton href='/signup'>Registrarse</LinkButton>
      </section>
    </UnprotectedDiv>
  );
}
