import React from 'react';
import PlaygroundCard from '@/components/PlaygroundCard';

export default function BonusPage() {
  const arrayEntries = Object.entries(bonusPage);
  return (
    <>
      {arrayEntries.map(([category, items]) => (
        <div key={category} className='category-bonus'>
          <div className='header'>
            <h3>{category}</h3>
            <hr />
          </div>
          <div className='playground-cards-grid'>
            {items.map((item, i) => (
              <PlaygroundCard key={i} {...item} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

const bonusPage = {
  básico: [
    {
      title: 'Foto de perfil profesional',
      points: 5,
      description: 'Sube una foto de perfil profesional.',
      item_id: 'foto-de-perfil-profesional',
      timesCompleted: 23,
      completed: true,
      comments: 5,
      likes: 12,
      points: 5,
    },
    {
      title: 'Presentación escrita',
      points: 10,
      description: 'Presentate ante la comunidad.',
      item_id: 'presentacion-escrita',
      timesCompleted: 23,
      completed: false,
      comments: 5,
      likes: 12,
      points: 5,
    },
    {
      title: 'Presentación en video',
      points: 40,
      description: 'Graba un video breve hablando a cámara presentandote.',
      item_id: 'presentacion-en-video',
      timesCompleted: 23,
      completed: true,
      comments: 5,
      likes: 12,
      points: 30,
    },
    {
      title: 'Completar Minimal CV',
      points: 10,
      description:
        'Completa tu CV para mostrar a la comunidad tu recorrido profesional.',
      item_id: 'completar-minimal-cv',
      timesCompleted: 23,
      completed: true,
      comments: 5,
      likes: 12,
      points: 15,
    },
  ],
  intermedio: [
    {
      title: 'Bonus Marronero',
      points: 10,
      description: 'Presentate ante la comunidad.',
      item_id: 'bonus-marronero',
      timesCompleted: 23,
      completed: true,
      comments: 5,
      likes: 12,
      points: 50,
    },
    {
      title: 'Auditoria personal',
      points: 10,
      description: 'Graba un video breve hablando a cámara presentandote.',
      item_id: 'auditoria-personal',
      timesCompleted: 23,
      completed: true,
      comments: 5,
      likes: 12,
      points: 20,
    },
  ],
  pro: [
    {
      title: 'Bonus de las galletas',
      points: 10,
      description: 'Presentate ante la comunidad.',
      item_id: 'bonus-de-las-galletas',
      timesCompleted: 23,
      completed: true,
      comments: 5,
      likes: 12,
      points: 50,
    },
  ],
};
