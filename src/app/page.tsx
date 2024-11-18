/** @format */

import { MainTitle } from '@/components/Maintitle';
import UnprotectedDiv from '@/app/(unprotected)/_components/UnprotectedDiv';
import LoginGoogle from '@/app/(unprotected)/_components/LoginGoogle';

export default function WellcomePage() {
  return (
    <UnprotectedDiv id='wellcome-page'>
      <header className='wellcome'>
        <MainTitle />
      </header>
      <section className='wellcome'>
          <LoginGoogle />
      </section>
    </UnprotectedDiv>
  );
}
