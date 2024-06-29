import React, { useState } from 'react';
import ClassCard from '@/components/ClassCard';
import ModelAsideLeft from '@/layouts/ModelAsideLeft';
import ModelMainPro from '@/layouts/ModelMainPro';
import { useClassroom } from '@/context/ClassroomContext';

export default function RoadTo100kPage() {
  const [ show , setShow ] = useState([]);
  const { isLoading, classes, isError, error } = useClassroom();

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const groupedByLevel = classes.reduce((acc, card) => {
    acc[card.level] = acc[card.level] ? [...acc[card.level], card] : [card];
    return acc;
  }, {});

  const scrollToSection = event => {
    const value = event.target.value;
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <>
      <ModelAsideLeft id='classroom' className='community' title='Secciones'>
        <div className='filter-buttons'>

          {/* {
            subjects.map((subject, index) => (
              <button key={index} value={subject} onClick={scrollToSection}>
                {subject}
              </button>
            ))
          } */}
        </div>
      </ModelAsideLeft>
      <ModelMainPro
        id='classroom'
        pageTitle='Classroom'
        title='Todo el contenido '
      >

       
            <div id='cards-grid'>
              {classes.map((card, index) => (
                <ClassCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  img={card.img}
                />
              ))}
            </div>

      </ModelMainPro>
    </>
  );
}


const subjects = [
  'Equipo',
  'Marketing',
  'Inversion y gestion financiera',
  'Sistemas',
  'Sistemas',
  'Validación',
  'Ventas',
  'Habilidades Imprescindibles',
  'Core de negocio',
  'Contabilidad',
  'Como crear y validar ideas',
  'Marca Persoal / Empresarial',
  'Como crear contenido de valor',
  'Mentalidad',
  'Inversión',
  'Productividad',
  'Escalado',
  'Escalado Fiscalidad',
];
const businessPhases = [
  'Fase 0',
  'Fase 1',
  'Fase 2',
  'Fase 3',
]
