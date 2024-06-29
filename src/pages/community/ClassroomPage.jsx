import React from 'react';
import { useClassroom } from '@/context/ClassroomContext';
import ModelMain from '@/layouts/ModelMain';
import { useParams } from 'react-router-dom';

export default function Classroom() {
  const { slug } = useParams();
  const { isLoading, classes, isError, error } = useClassroom();

  const navRoad = [
    { title: 'Nivel 1', page: 'classroom', slug: 'level-1' },
    { title: 'Nivel 2', page: 'classroom', slug: 'level-2' },
    { title: 'Nivel 3', page: 'classroom', slug: 'level-3' },
    { title: 'Nivel 4', page: 'classroom', slug: 'level-4' },
    { title: 'Nivel 5', page: 'classroom', slug: 'level-5' },
    { title: 'Nivel 6 - 0.19', page: 'classroom', slug: 'level-6' },
    { title: 'Nivel 7', page: 'classroom', slug: 'level-7' },
    { title: 'Nivel 8', page: 'classroom', slug: 'level-8' },
    { title: 'Nivel 9', page: 'classroom', slug: 'level-9' },
  ];
  const PHASE_SLUG = {
    'level-1': ['Validación'],
    'level-2': ['Core de negocio'],
    'level-3': ['Ventas'],
    'level-4': ['Inversión', 'Escalado'],
    'level-5': ['Inversión', 'Escalado'],
    'level-6': ['Inversión', 'Escalado'],
    'level-7': ['Inversión', 'Escalado'],
    'level-8': ['Inversión', 'Escalado'],
    'level-9': ['Inversión', 'Escalado'],
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
          <span className='page-title'>Desbloqueables</span>
        )}
      </div>
    </ModelMain>
  );
}
