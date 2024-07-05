import React from 'react';
import ProjectCard from '@/components/ProjectCard';

export default function BrainstormingPage() {
  return (
    <>
      <div className='projects-cards-grid'>
        {brainstormingObject.map((item, i) => (
          <ProjectCard key={i} {...item} />
        ))}
      </div>
    </>
  );
}

const brainstormingObject = [
  {
    title: 'El indicador Bernardos',
    description:
      'Muchos ya lo conoceréis, pero para los que no, hoy os traigo al conocido como 𝙄𝙣𝙙𝙞𝙘𝙖𝙙𝙤𝙧 𝘽𝙚𝙧𝙣𝙖𝙧𝙙𝙤𝙨 junto a una 𝐩𝐫𝐨𝐩𝐮𝐞𝐬𝐭𝐚 rápida para aquellos que estéis aprendiendo automatización de IA.',
    item_id: 'foto-de-perfil-profesional',
    likes: 12,
    comments: 5,
    participants: 5,
    autor: 'Pablo Rodríguez',
  },
];
