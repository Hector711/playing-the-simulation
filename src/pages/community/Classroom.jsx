import React from 'react';
import ModelAsideLeft from '@/layouts/ModelAsideLeft';
import { NavLink } from 'react-router-dom';
import ModelMainPro from '@/layouts/ModelMainPro';
const cards = [
  {
    title: 'Introducción a Playing the Simulation',
    description:
      'Pásate por todos los canales y aporta algo, así escalarás en la comunidad (Obteniendo',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/bf71eb2e22364cfdbd1ee43897eeb6e2fefe68f833b44bb686a865ce61e53aef',
    level: 'Introducción',
  },
  {
    title: 'Directos',
    description:
      'Aquí re-subiremos todos los directos para que podáis verlos si no pudisteis asistir.',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/a31ce920f94b4f419940a8320178caf2a2efafbf424e464c847214e24133d79e',
    level: 'Introducción',
  },
  {
    title: 'Sistema de Fianzas',
    description:
      'Pruébalo un mes y te garantizo que tu vida jamás volverá a ser igual.',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/de0e0c26c1dc47b1881bbcaaadfce3c6b7a5faf26e2a4b359cd1c8cf17f33273',
    level: 'Introducción',
  },
  {
    title: 'Community post LOOMs',
    description: '',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/e4f1907c8df5439abbcacf08f1d08c0b1ba0ec09cf5646a683ceca1b772b24ce',
    level: 'Introducción',
  },
  {
    title: 'Bonus Marronero 50€',
    description: 'Genera 50€ mensuales',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/5abfe61d8a5948d19117015e21c45dbbdd9e9970f03845bfa3918f70bd7f3f99',
    level: 'Bonus',
  },
  {
    title: 'Presentacion Escrita',
    description:
      'Presentate ante la comunidad escribiendo un post hablando sobre ti',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/5abfe61d8a5948d19117015e21c45dbbdd9e9970f03845bfa3918f70bd7f3f99',
    level: 'Bonus',
  },
  {
    title: 'Bonus Presentacion en Video',
    description: 'Crea un video hablando a camara hablando sobre ti',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/5abfe61d8a5948d19117015e21c45dbbdd9e9970f03845bfa3918f70bd7f3f99',
    level: 'Bonus',
  },
  {
    title: 'Bonus Minimal CV',
    description: 'Crea un video hablando a camara hablando sobre ti',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/5abfe61d8a5948d19117015e21c45dbbdd9e9970f03845bfa3918f70bd7f3f99',
    level: 'Bonus',
  },
  {
    title: 'Bonus Reto Galletas',
    description: 'Realiza el mitico reto de la venta de galletas',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/5abfe61d8a5948d19117015e21c45dbbdd9e9970f03845bfa3918f70bd7f3f99',
    level: 'Bonus',
  },
  {
    title: 'Fundamentos | de 0 - 10k',
    description: 'Se desbloquean semanalmente.',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/ae12604bddc940d9842f742a636107db95079e35794c4175bee6a1db16b50104',
    level: 'De 0 a 10k',
  },
  {
    title: 'Nivel 2: Manual del Viajero',
    description:
      'Bienvenido Funcionario, este es tu regalo desbloqueable, disfrútalo! (Próximamente)',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/00edfe38ecb947ab9c359842aa5a179d65ed1c332b764941986147e86967ec6c',
    level: 'Desbloqueables',
  },
  {
    title: 'Nivel 3: Herramientas para dejar de ser mileurista',
    description:
      'Bienvenido Mileurista, este es tu regalo desbloqueable, disfrútalo! (Próximamente)',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/0a7b518f8217460bb82952f5139858092da71d1d1e9745c78bf5a7141e6e9deb',
    level: 'Desbloqueables',
  },
  {
    title:
      'Nivel 4: Técnicas de Ahorro básicas para que las crypto te la pelen',
    description:
      'Bienvenido CryptoBro, este es tu regalo desbloqueable, disfrútalo! (Próximamente)',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/42e20ac0e8d24123b957df624d44388e70d71d69dec042c5bf1dc9a268f28447',
    level: 'Desbloqueables',
  },
  {
    title: 'Nivel 5: Instagram para vender más',
    description:
      'Bienvenido CEO de Bio de Instagram, este es tu regalo desbloqueable, disfrútalo!',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/876d21a49bb847e682307b4267299296c2252345c26c444e9a50aa0812b7a074',
    level: 'Desbloqueables',
  },
  {
    title: 'Nivel 6: Enciclopedia 0.19%',
    description:
      'Este premio está solo reservado a las personas que han aportado mucho a la',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/7b01789c10c3460abf5fa1152c8bfb325629a3ebe6e942b3b9c1428fdbf01b21',
    level: 'Desbloqueables',
  },
  {
    title: 'Nivel 7: Técnicas de Elusión Fiscal',
    description:
      'Bienvenido Emprendedor, este es tu regalo desbloqueable, disfrútalo! (Próximamente)',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/6211290555eb4fbd968e6e1cf46b648120492bc4c1034066a0a5f529563f9f3d',
    level: 'Desbloqueables',
  },
  {
    title: 'Nivel 8: Global project',
    description:
      'Bienvenido Dueño de Holding, este es tu regalo desbloqueable, disfrútalo!',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/da127db347e64ea9afe78871636bff028d33e119af06403e92b701c8876f83e4',
    level: 'Desbloqueables',
  },
  {
    title: 'Nivel 9: Secret',
    description:
      'Solo los elegidos podrán llegar hasta aquí, si eres uno de ellos; nunca podrás contar lo que',
    img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/f0ba9541b5364680b208c05144e26561e0e9ab01a5814e8093b0882ab49e4d09',
    level: 'Desbloqueables',
  },
  // {
  //   title: 'CORE DE NEGOCIO',
  //   description: '',
  //   img: 'https://assets.skool.com/f/abad99b8b10147208c25e16944beaa5b/f0ba9541b5364680b208c05144e26561e0e9ab01a5814e8093b0882ab49e4d09',
  //   level: 2,
  // },
];

export default function Classroom() {
  const groupedByLevel = cards.reduce((acc, card) => {
    acc[card.level] = acc[card.level] ? [...acc[card.level], card] : [card];
    return acc;
  }, {});
  return (
    <>
      <ModelAsideLeft id='classroom' >
        <NavLink>Todo el contenido</NavLink>
        <hr />
        <button>Introducción</button>
        <button>Bonus</button>
        <button>Negocio</button>
        <button>Desbloqueables</button>
      </ModelAsideLeft>
      <ModelMainPro id='classroom' pageTitle='Classroom'>
        <h3 className='section-page'>Todo el contenido</h3>
        {Object.entries(groupedByLevel).map(([level, cards]) => (
          <>
            <hr />
            <section key={level}>
              <h4>{level}</h4>
              <div id='cards-grid'>
                {cards.map((card, index) => (
                  <ClassroomCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    img={card.img}
                  />
                ))}
              </div>
            </section>
          </>
        ))}
      </ModelMainPro>
    </>
  );
}

function ClassroomLink() {
  return <button>Ver Clase</button>;
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
