import React from 'react';
import ClassroomCard from '@/components/ClassroomCard';

export default function DesbloqueablesPage() {
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
    title: 'Nivel 2',
    description: 'Funcionario: Manual del Viajero.',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/00edfe38ecb947ab9c359842aa5a179d65ed1c332b764941986147e86967ec6c',
    slug: 'level-1'
  },
  {
    title: 'Nivel 3',
    description: 'Mileurista: Las mejores herramientas para dejar de ser mileurista.',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/0a7b518f8217460bb82952f5139858092da71d1d1e9745c78bf5a7141e6e9deb',
    slug: 'level-2'
  },
  {
    title: 'Nivel 4',
    description: 'Cryptobro: Técnicas de ahorro básicas para que las crypto te la pelen',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/42e20ac0e8d24123b957df624d44388e70d71d69dec042c5bf1dc9a268f28447',
    slug: 'level-3'
  },
  {
    title: 'Nivel 5',
    description: 'CEO de Bio de INSTAGRAM: Cómo empaquetar instagram para vender más.',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/0a7b518f8217460bb82952f5139858092da71d1d1e9745c78bf5a7141e6e9deb',
    slug: 'level-4'
  },
  {
    title: 'Nivel 6',
    description: 'Hustler Marronero: Enciclopedia 0.19%',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/7b01789c10c3460abf5fa1152c8bfb325629a3ebe6e942b3b9c1428fdbf01b21',
    slug: 'level-6'
  },
  {
    title: 'Nivel 7',
    description: 'Emprendedor: Técnicas de Elusión Fiscal',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/6211290555eb4fbd968e6e1cf46b648120492bc4c1034066a0a5f529563f9f3d',
    slug: 'level-7'
  },
  {
    title: 'Nivel 8',
    description: 'Dueño de holding: Internacionaliza un proyecto y hazlo invertible a escala global',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/da127db347e64ea9afe78871636bff028d33e119af06403e92b701c8876f83e4',
    slug: 'level-8'
  },
  {
    title: 'Nivel 9',
    description: 'Simulation Creator: Secret',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/f0ba9541b5364680b208c05144e26561e0e9ab01a5814e8093b0882ab49e4d09',
    slug: 'level-9'
  }
];
