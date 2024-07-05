import React from 'react';
import PlaygroundCard from '@/components/PlaygroundCard';

export default function BrainstormingPage() {
  return (
    <>
      <div className='playground-cards-grid'>
        {brainstormingObject.map((item, i) => (
          <PlaygroundCard key={i} {...item} />
        ))}
      </div>
    </>
  );
}

const brainstormingObject = [
  {
    title: 'El indicador Bernardos',
    description: '.',
    item_id: 'foto-de-perfil-profesional',
    projectDescription: 'Una IA que indica cuando invertir.',
    likes: 12,
    comments: 5,
    autor: 'Pablo Rodríguez',
    participants: 4,
    img: 'https://assets.skool.com/f/7721e90de3474cab8d6c9cd957b37f80/7da054815ed24d08b06d1fff10844ebe42ca811f5f9f4a4d9d81fcd425b9396f-sm.jpg'
  }
];
