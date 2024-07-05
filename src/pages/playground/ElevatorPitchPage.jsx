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
    description: 'Racks Labs es una innovadora empresa de consultoría especializada en Inteligencia Artificial (IA). Fundada con la visión de hacer la IA accesible y aplicable para empresas de todos los tamaños, Racks Labs se ha posicionado rápidamente como líder en el sector de la consultoría tecnológica.',
    item_id: 'foto-de-perfil-profesional',
    likes: 12,
    comments: 5,
    points: 5,
    autor: 'Carlos Adams',
    img: 'https://assets.skool.com/f/7721e90de3474cab8d6c9cd957b37f80/7da054815ed24d08b06d1fff10844ebe42ca811f5f9f4a4d9d81fcd425b9396f-sm.jpg',
  },
  {
    title: 'Strategy Pulse',
    points: 10,
    description: 'Strategy Pulse es una agencia de consultoría de marketing dinámica y orientada a resultados. Fundada con la misión de impulsar el crecimiento de nuestros clientes en el competitivo panorama digital actual, nos especializamos en desarrollar estrategias de marketing innovadoras y efectivas.',
    item_id: 'presentacion-escrita',
    likes: 12,
    comments: 5,

    points: 5,
    autor: 'Pedro Márquez',
    img: '',
  },
  {
    title: 'Nebula Realms Studios',
    points: 40,
    description: 'Nebula Realms Studios es una prominente desarrolladora y editora de videojuegos AAA, reconocida por crear experiencias de juego inmersivas y de alta calidad. Fundada por un grupo de veteranos de la industria, nuestra compañía se ha establecido rápidamente como un referente en el desarrollo de títulos de gran presupuesto y alcance global.',
    item_id: 'presentacion-en-video',
    likes: 12,
    comments: 5,
    points: 30,
    autor: 'Raul González',
    img: '',
  },
];
