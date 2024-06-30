import React from 'react';
import { useClassroom } from '@/context/ClassroomContext';
import ModelMain from '@/layouts/ModelMain';
import { useParams } from 'react-router-dom';

export default function PlaygroundPage() {
  const { slug } = useParams();

  const navRoad = [
    { title: 'Bonus', page: 'playground', slug: 'bonus' },
    { title: 'Retos', page: 'playground', slug: 'retos' },
    { title: 'Brainstorming', page: 'playground', slug: 'brainstorming' },
    {
      title: 'Elevator Pitchs',
      page: 'playground',
      slug: 'elevator-pitchs',
    },
  ];
  const PHASE_SLUG = {
    bonus: ['Validación'],
    brainstorming: ['Core de negocio'],
    retos: ['Validación', 'Core de negocio'],
    'elevator-pitchs': ['Validación', 'Core de negocio'],
  };

  return (
    <ModelMain className='max' id='road-to-100k' nav={navRoad}>
      <div id='class-grid'>
        {slug ? (
          <>
            <aside>
              {slug &&
                PHASE_SLUG[slug].map((subject, i) => (
                  <button key={i}>{subject}</button>
                ))}
            </aside>
            <main>
              <h3>Clase</h3>
            </main>
          </>
        ) : (
          <span className='page-title'>Playground</span>
        )}
      </div>
    </ModelMain>
  );
}
