/** @format */

import { MainTitle } from '@/components/Maintitle';
import UnprotectedDiv from '@/app/(unprotected)/_components/UnprotectedDiv';
import GoogleAuthButton from '@/app/(unprotected)/signup/_components/GoogleAuthButton';

export default function WellcomePage() {
  return (
    <UnprotectedDiv id='wellcome-page'>
      <header className='wellcome'>
        <MainTitle />
      </header>
      <section className='wellcome'>
          <GoogleAuthButton />
      </section>
    </UnprotectedDiv>
  );
}
