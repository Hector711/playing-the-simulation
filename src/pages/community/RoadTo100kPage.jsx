import React from 'react';
import ModelMain from '@/layouts/ModelMain';
import { useClassroom } from '@/context/ClassroomContext';
import { useParams } from 'react-router-dom';

export default function RoadTo100kPage() {
  const { slug } = useParams();
  const { isLoading, isError, error } = useClassroom();

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error: {error.message}</div>;
  }
  const navRoad = [
    { title: 'Fase 0', page: 'roadto100k', slug: 'phase-0' },
    { title: 'Fase 1 (5k€)', page: 'roadto100k', slug: 'phase-1' },
    { title: 'Fase 2 (10k€)', page: 'roadto100k', slug: 'phase-2' },
    { title: 'Fase 3 (100k€)', page: 'roadto100k', slug: 'phase-3' },
  ];

  const PHASE_SLUG = {
    'phase-0': [
      'Validación',
      'Productividad',
      'Habilidades Imprescindibles',
      'Como crear y validar ideas',
    ],
    'phase-1': ['Core de negocio', 'Equipo', 'Marketing', 'Sistemas'],
    'phase-2': [
      'Ventas',
      'Contabilidad',
      'Marca Persoal / Empresarial',
      'Como crear contenido de valor',
      'Mentalidad',
    ],
    'phase-3': [
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
          <span className='page-title'>De 0 a 100k</span>
        )}
      </div>
    </ModelMain>
  );
}
