import React from 'react';
import PlaygroundCard from '@/components/PlaygroundCard';

export default function RetosPage() {
  return (
    <>
      <div className='playground-cards-grid'>
        {retosObject.map((item, i) => (
          <PlaygroundCard key={i} {...item} />
        ))}
      </div>
    </>
  );
}

const retosObject = [
  {
    title: 'Reto de Aproximación en frío',
    points: 5,
    description: 'Sube una foto de perfil profesional.',
    item_id: 'foto-de-perfil-profesional',
    timesCompleted: 23,
    completed: true,
    likes: 12,
    points: 5,
    autor: 'Héctor Guerra',
    img: 'https://i.ibb.co/s5smtmL/profile-pic.jpg'
  },
  {
    title: 'Reto de la Exposición Progresiva',
    points: 10,
    description: 'Presentate ante la comunidad.',
    item_id: 'presentacion-escrita',
    timesCompleted: 23,
    completed: false,
    likes: 12,
    points: 5,
    autor: 'Pedro Márquez',
    img: ''
  },
  {
    title: 'Reto del comerciante',
    points: 40,
    description: 'Graba un video breve hablando a cámara presentandote.',
    item_id: 'presentacion-en-video',
    timesCompleted: 23,
    completed: true,
    likes: 12,
    points: 30,
    autor: 'Raul González',
    img: ''

  },
  {
    title: 'Completar Minimal CV',
    points: 10,
    description:
      'Completa tu CV para mostrar a la comunidad tu recorrido profesional.',
    item_id: 'completar-minimal-cv',
    timesCompleted: 23,
    completed: true,
    likes: 12,
    points: 15,
    autor: 'José Salamanca',
    img: ''

  },
  {
    title: 'Bonus Marronero',
    points: 10,
    description: 'Presentate ante la comunidad.',
    item_id: 'bonus-marronero',
    timesCompleted: 23,
    completed: true,
    likes: 12,
    points: 50,
    autor: 'Alessandro Gómez',
    img: ''
  },
  {
    title: 'Declarar todo a hacienda',
    points: 10,
    description: 'Presentate ante la comunidad.',
    item_id: 'bonus-de-las-galletas',
    timesCompleted: 23,
    completed: true,
    likes: 12,
    points: 50,
    autor: 'Pedro Sánchez',
    img: ''

  },
];
