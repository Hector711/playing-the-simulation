/** @format */

import { MainTitle } from '@/components/Maintitle';
import UnprotectedDiv from '@/app/(unprotected)/_components/UnprotectedDiv';
import LogInGoogleButton from '@/app/(unprotected)/_components/LogInGoogleButton';
import LinkButton from '@/components/LinkButton';
export default function WellcomePage() {
  return (
    <UnprotectedDiv id='wellcome-page' className='gap-6 flex py-20'>
      <header className='wellcome'>
        <MainTitle />
      </header>
      <section className='flex items-center justify-center min-w-max w-full max-w-[35vw] gap-8'>
        <LogInGoogleButton />
        <LinkButton href='/signup'>Registrarse</LinkButton>
      </section>
    </UnprotectedDiv>
  );
}
