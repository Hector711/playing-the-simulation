import React from 'react';
import ClassroomCard from '@/components/ClassroomCard';

export default function De0A100Page() {
  return (
    <div className='classroom-cards-grid '>
      {businessPhases.map((phase, i) => (
        <ClassroomCard key={i} {...phase} />
      ))}
    </div>
  );
}

const businessPhases = [
  {
    title: 'Fase 0',
    description: 'Negocio no empezado',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/ae12604bddc940d9842f742a636107db95079e35794c4175bee6a1db16b50104',
    slug: 'fase-0'
  },
  {
    title: 'Fase 1',
    description: 'Negocio en desarrollo',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/ae12604bddc940d9842f742a636107db95079e35794c4175bee6a1db16b50104',
    slug: 'fase-1'
  },
  {
    title: 'Fase 2',
    description: 'Negocio en crecimiento',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/ae12604bddc940d9842f742a636107db95079e35794c4175bee6a1db16b50104',
    slug: 'fase-2'
  },
  {
    title: 'Fase 3',
    description: 'Negocio en consolidación',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/ae12604bddc940d9842f742a636107db95079e35794c4175bee6a1db16b50104',
    slug: 'fase-3'
  },
];
