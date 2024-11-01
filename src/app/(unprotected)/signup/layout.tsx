/** @format */

import UnprotectedDiv from '@/app/(unprotected)/_components/UnprotectedDiv';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <UnprotectedDiv id='signup-page'>
      <header>
        <h3 className='text-3xl font-bold text-center'>Registrate en PTS</h3>
      </header>
      <section id='skool-question'>
        <div className='flex flex-col gap-4'>{children}</div>
      </section>
    </UnprotectedDiv>
  );
}
