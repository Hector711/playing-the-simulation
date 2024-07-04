import React from 'react';
import ModelMain from '@/layouts/ModelMain';
import { useClassroom } from '@/context/ClassroomContext';
import { useParams } from 'react-router-dom';

export default function De0A100c() {
  const { slug } = useParams();
  const { isLoading, isError, error } = useClassroom();

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error: {error.message}</div>;
  }
  const navRoad = [
    { title: 'Fase 0', page: 'road-to-100k', slug: 'fase-0' },
    { title: 'Fase 1 (1k)', page: 'road-to-100k', slug: 'fase-1' },
    { title: 'Fase 2 (10k)', page: 'road-to-100k', slug: 'fase-2' },
    { title: 'Fase 3 (100k)', page: 'road-to-100k', slug: 'fase-3' },
  ];

  const PHASE_SLUG = {
    'fase-0': [
      'Validación',
      'Productividad',
      'Habilidades Imprescindibles',
      'Como crear y validar ideas',
    ],
    'fase-1': ['Core de negocio', 'Equipo', 'Marketing', 'Sistemas'],
    'fase-2': [
      'Ventas',
      'Contabilidad',
      'Marca Persoal / Empresarial',
      'Como crear contenido de valor',
      'Mentalidad',
    ],
    'fase-3': [
      'Inversión',
      'Escalado',
      'Inversion y gestion financiera',
      'Escalado Fiscalidad',
    ],
  };

  return (
    <ModelMain className='max' id='road-to-100k' nav={navRoad}>
      <div id='class-grid'>
        {slug ? (
          <>
            <aside id='left' className='blurr'>
              {slug &&
                PHASE_SLUG[slug].map((subject, i) => (
                  <button key={i}>{subject}</button>
                ))}
            </aside>
            <main className='blurr'>
              <h3>Clase</h3>
            </main>
            <aside id='right' className='blurr'>
              <h3>Commentarios</h3>
            </aside>
          </>
        ) : (
          <span className='page-title'>De 0 a 100k
          <img src="https://i.ibb.co/BqGN8Y5/Captura-de-pantalla-2024-06-30-a-las-6-34-52-p-m.png"  alt="" />
          </span>
        )}
      </div>
    </ModelMain>
  );
}
