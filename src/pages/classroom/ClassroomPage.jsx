import React, { useEffect } from 'react';
import ModelMain from '@/layouts/ModelMain';
import { useParams } from 'react-router-dom';
import { useNavigate, NavLink } from 'react-router-dom';
import De0A100Page from '@/pages/classroom/De0A100Page';
import DesbloqueablesPage from '@/pages/classroom/DesbloqueablesPage';

export default function ClassroomPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  useEffect(() => {
    // Redirige a '/classroom/de-0-a-100' al montar el componente
    navigate('/classroom/de-0-a-100');
  }, []); // Dependencia para asegurar que navigate esté definido

  const CLASSROOM_SLUGS = {
    'de-0-a-100': <De0A100Page />,
    desbloqueables: <DesbloqueablesPage />,
  };
  const navClassroom = [
    { title: 'De 0 a 100', page: 'classroom', slug: 'de-0-a-100' },
    { title: 'Desbloqueables', page: 'classroom', slug: 'desbloqueables' },
  ];

  return (
    <ModelMain className='max' id='road-to-100k' nav={navClassroom}>
      {CLASSROOM_SLUGS && (
        <div>
          {CLASSROOM_SLUGS[slug]}
        </div>

        // <>
        //   <aside id='left' className='blurr'>
        //     <h3 className='impact'>Clases</h3>
        //     {slug &&
        //       CLASSROOM_SLUG[slug].map((subject, i) => (
        //         <button key={i}>{subject}</button>
        //       ))}
        //   </aside>
        //   <main className='blurr'>
        //     <h3>Clase</h3>
        //   </main>
        //   <aside id='right' className='blurr'>
        //     <h3>Commentarios</h3>
        //   </aside>
        // </>
      )}
    </ModelMain>
  );
}


