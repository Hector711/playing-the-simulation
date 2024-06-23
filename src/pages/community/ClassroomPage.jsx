import React from 'react';
import ModelAsideLeft from '@/layouts/ModelAsideLeft';
import { NavLink } from 'react-router-dom';
import ModelMainPro from '@/layouts/ModelMainPro';
import { getClasses } from '@/api/classesApi';
import { useQuery } from '@tanstack/react-query';

export default function ClassroomPage() {
  const {
    isLoading,
    data: classes,
    isError,
    error,
  } = useQuery({
    queryKey: ['classes'],
    queryFn: getClasses,
  });

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
    // Asegúrate de que el elemento exista para evitar errores
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ModelAsideLeft id='classroom' className='community' title='Secciones'>
        <div className='filter-buttons'>
          <button value='Introducción' onClick={scrollToSection}>
            Introducción
          </button>
          <button value='Bonus' onClick={scrollToSection}>
            Bonus
          </button>
          <button value='De 0 a 10k' onClick={scrollToSection}>
            De 0 a 10k
          </button>
          <button value='Ideas / Retos' onClick={scrollToSection}>
            Ideas / Retos
          </button>
          <button value='Desbloqueables' onClick={scrollToSection}>
            Desbloqueables
          </button>
        </div>
      </ModelAsideLeft>
      <ModelMainPro
        id='classroom'
        pageTitle='Classroom'
        title='Todo el contenido '
      >
        {Object.entries(groupedByLevel).map(([level, classes]) => (
          <section key={level} id={level}>
            <h4>{level}</h4>
            <div id='cards-grid'>
              {classes.map((card, index) => (
                <ClassroomCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  img={card.img}
                />
              ))}
            </div>
          </section>
        ))}
      </ModelMainPro>
    </>
  );
}

function ClassroomCard({ title, description, img }) {
  return (
    <div className='classroom-card'>
      <img src={img} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
