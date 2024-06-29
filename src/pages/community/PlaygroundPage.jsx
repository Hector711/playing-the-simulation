import React from 'react';
import { useClassroom } from '@/context/ClassroomContext';
import ModelMain from '@/layouts/ModelMain';
import { useParams } from 'react-router-dom';

export default function PlaygroundPage() {
  const { slug } = useParams();

  const navRoad = [
    { title: 'Bonus', page: 'playground', slug: 'bonus' },
    { title: 'Ideas', page: 'playground', slug: 'ideas' },
  ];
  const PHASE_SLUG = {
    bonus: ['Validación'],
    ideas: ['Core de negocio'],
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
              {' '}
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
