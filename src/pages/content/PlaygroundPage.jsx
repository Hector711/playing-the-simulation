import React from 'react';
// import { useClassroom } from '@/context/ClassroomContext';
import { useParams } from 'react-router-dom';
import ModelMain from '@/layouts/ModelMain';

import ContentGrid from '@/components/ContentGrid';
import AccordionsContainer from '@/components/AccordionsContainer';
import BonusPage from '@/pages/content/BonusPage';
export default function PlaygroundPage() {
  const { slug } = useParams();

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
  const PHASE_SLUG = {
    bonus: <BonusPage />,
    brainstorming: ['Core de negocio'],
    retos: ['Validación', 'Core de negocio'],
    'elevator-pitch': ['Validación', 'Core de negocio'],
  };

  return (
    <ModelMain className='max' id='road-to-100k' nav={navRoad}>
      <ContentGrid>
        {slug ? (
          <>
            <aside className='left'>
              <AccordionsContainer>
                <BonusPage />
              </AccordionsContainer>
              {/* {slug && PHASE_SLUG[slug]} */}
            </aside>
            <main>
              <h3>Clase</h3>
            </main>
            <aside className='right'>ded</aside>
          </>
        ) : (
          <span className='page-title'>Playground</span>
        )}
      </ContentGrid>
    </ModelMain>
  );
}


const retosPage = {
  basic: [
    {
      title: 'Foto de perfil profesional',
      points: 5,
      description: 'Graba un video breve hablando a cámara presentandote',
    },
    {
      title: 'Presentación escrita',
      points: 10,
      description: 'Presentate ante la comunidad',
    },
    {
      title: 'Presentación en video',
      points: 40,
      description: 'Graba un video breve hablando a cámara presentandote',
    },
    {
      title: 'Completar Minimal CV',
      points: 10,
      description: 'Graba un video breve hablando a cámara presentandote',
    },
  ],
  intermedio: [
    {
      title: 'Bonus Marronero',
      points: 10,
      description: 'Presentate ante la comunidad',
    },
    {
      title: 'Auditoria personal',
      points: 10,
      description: 'Graba un video breve hablando a cámara presentandote',
    },
  ],
  pro: [
    {
      title: 'Bonus de las galletas',
      points: 10,
      description: 'Presentate ante la comunidad',
    },
    
  ],
};
