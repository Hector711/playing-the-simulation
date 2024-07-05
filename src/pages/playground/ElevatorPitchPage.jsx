import React from 'react';
import ProjectCard from '@/components/ProjectCard';

export default function ElevatorPitchPage() {
  return (
    <div className='projects-cards-grid'>
      {elevatorPitchObject.map((item, i) => (
        <ProjectCard key={i} {...item} />
      ))}
    </div>
  );
}

const elevatorPitchObject = [
  {
    title: 'Racks Labs',
    points: 5,
    description: 'Sube una foto de perfil profesional.',
    item_id: 'foto-de-perfil-profesional',
    likes: 12,
    comments: 5,
    points: 5,
    autor: 'Carlos Adams',
    img: 'https://assets.skool.com/f/7721e90de3474cab8d6c9cd957b37f80/7da054815ed24d08b06d1fff10844ebe42ca811f5f9f4a4d9d81fcd425b9396f-sm.jpg',
  },
  {
    title: 'Mi empresa de consultoría',
    points: 10,
    description: 'Presentate ante la comunidad.',
    item_id: 'presentacion-escrita',
    likes: 12,
    comments: 5,

    points: 5,
    autor: 'Pedro Márquez',
    img: '',
  },
  {
    title: 'Mi Triple A',
    points: 40,
    description: 'Graba un video breve hablando a cámara presentandote.',
    item_id: 'presentacion-en-video',
    likes: 12,
    comments: 5,
    points: 30,
    autor: 'Raul González',
    img: '',
  },
];
