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
    title: 'Reto aproximación en frío',
    points: 5,
    description: 'Sube una foto de perfil profesional.',
    item_id: 'foto-de-perfil-profesional',
    timesCompleted: 23,
    completed: true,
    likes: 12,
    comments: 5,
    points: 5,
    autor: 'Héctor Guerra',
    img: 'https://i.ibb.co/s5smtmL/profile-pic.jpg',
  },
  {
    title: 'Reto de la Exposición Progresiva',
    points: 10,
    description: 'Presentate ante la comunidad.',
    item_id: 'presentacion-escrita',
    timesCompleted: 23,
    completed: false,
    comments: 5,
    likes: 12,
    points: 5,
    autor: 'Héctor Guerra',
    img: 'https://i.ibb.co/s5smtmL/profile-pic.jpg',
  },
  {
    title: 'Reto del comerciante',
    points: 40,
    description: 'Graba un video breve hablando a cámara presentandote.',
    item_id: 'presentacion-en-video',
    timesCompleted: 23,
    completed: true,
    comments: 5,
    likes: 12,
    points: 30,
    autor: 'Raul González',
    img: '',
  },
  {
    title: 'Reto de declarar todo a hacienda',
    points: 10,
    description:
      'Venga chavales a ver quien tiene huevos de declarar todo a hacienda (inclyendo criptomonedas) jajajj venga, el último es podemita.',
    item_id: 'bonus-de-las-galletas',
    timesCompleted: 23,
    completed: true,
    comments: 5,
    likes: 12,
    points: 50,
    autor: 'Pedro Sánchez',
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Pedro_Sánchez_in_2023.jpg',
  },
];
