import React, { useEffect } from 'react';
// import { useClassroom } from '@/context/ClassroomContext';
import { useParams, useNavigate } from 'react-router-dom';
import ModelMain from '@/layouts/ModelMain';

import ContentGrid from '@/components/ContentGrid';
import AccordionsContainer from '@/components/AccordionsContainer';
import BonusPage from '@/pages/classroom/BonusPage';
import RetosPage from '@/pages/classroom/RetosPage';
import BrainstormingPage from '@/pages/classroom/BrainstormingPage';
import ElevatorPitchPage from '@/pages/classroom/ElevatorPitchPage';
export default function PlaygroundPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const navRoad = [
    { title: 'Bonus', page: 'playground', slug: 'bonus' },
    { title: 'Retos', page: 'playground', slug: 'retos' },
    { title: 'Brainstorming', page: 'playground', slug: 'brainstorming' },
    {
      title: 'Elevator Pitch',
      page: 'playground',
      slug: 'elevator-pitch',
    },
  ];
  useEffect(() => {
    navigate('/playground/bonus');
  }, []);
  const PLAYGROUND_SLUGS = {
    bonus: <BonusPage />,
    retos: <RetosPage />,
    brainstorming: <BrainstormingPage />,
    'elevator-pitch': <ElevatorPitchPage />,
  };

  return (
    <ModelMain className='max' id='bonus-page' nav={navRoad}>
      <section id='bonus-page'>
      {slug && (
        <>{PLAYGROUND_SLUGS[slug]}</>
        // <aside className='left'>
        //   <AccordionsContainer>
        //     <BonusPage />
        //   </AccordionsContainer>
        //   {/* {slug && PHASE_SLUG[slug]} */}
        // </aside>
        // <main>
        //   <h3>Clase</h3>
        // </main>
        // <aside className='right'>ded</aside>
      )}

      </section>
    </ModelMain>
  );
}
