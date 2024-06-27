import React from 'react';
import ModelMainPro from '@/layouts/ModelMainPro';
import ModelAsideRight from '@/layouts/ModelAsideRight';
import Game from '@/icons/Game';

export default function CommunityPage() {
  return (
    <>
      <ModelMainPro title='Comunidad' className='left' id='community'>
        <article className='community'>
          <header className='community'>
            <h4>Niveles</h4>
            <LineLevels />
          </header>
          <hr />
          <section className='community'>
            {levels.map(({ level, points, description, reward }, i) => (
              <article key={i} className='cards-levels'>
                <header className='cards-levels'>
                  <h5>Nivel {level}</h5>
                  <span>&#160;&#8226; {points} puntos</span>
                </header>
                <section className='cards-levels'>
                  <span>{description}:&#160;</span>
                  <p>{reward}</p>
                </section>
              </article>
            ))}
          </section>
        </article>
      </ModelMainPro>
      <ModelAsideRight id='community'>
        <header>
          <Game />
        </header>
        <hr />
        {communityButtons.map((button, index) => (
          <CommunityButton key={index} title={button.title} />
        ))}
      </ModelAsideRight>
    </>
  );
}

function CommunityButton({ title, value }) {
  return (
    <button className='community-button' value={value}>
      <span>{title}</span>
    </button>
  );
}

const communityButtons = [
  { title: 'Introducción', value: 'Introducción' },
  { title: 'Niveles', value: 'Niveles' },
  { title: 'Normas', value: 'Normas' },
  { title: 'Lore', value: 'Lore' },
  { title: 'Bonus', value: 'Bonus' },
  { title: 'Otros', value: 'Otros' },
];

function LineLevels() {
  return (
    <div id='line-levels'>
      <div id='line-container'>
        <div id='line'></div>
        <div id='dots-container'>
          {levels.map(({ level, id }, i) => (
            <LevelDot key={i} level={level} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LevelDot({ level, id }) {
  return (
    <div className='individual-dots-containers' id={id}>
      <span>
        <button>{level}</button>
        <div className='dots'></div>
        <div className='hidden-dots'></div>
      </span>
    </div>
  );
}

const levels = [
  {
    level: 1,
    points: 0,
    description: 'Nini',
    reward: 'Introducción a la comunidad',
    id: 'uno',
  },
  {
    level: 2,
    points: 5,
    description: 'Funcionario',
    reward: 'Funcionario: Manual del Viajero',
    id: 'dos',
  },
  {
    level: 3,
    points: 20,
    description: 'Mileurista',
    reward: 'Herramientas para dejar el mileurismo',
    id: 'tres',
  },
  {
    level: 4,
    points: 65,
    description: 'CryptoBro',
    reward: 'Técnicas de Ahorro Básicas',
    id: 'cuatro',
  },
  {
    level: 5,
    points: 155,
    description: 'CEO de bio INSTAGRAM',
    reward: 'Instagram Packing',
    id: 'cinco',
  },
  {
    level: 6,
    points: 515,
    description: 'Hustler marronero',
    reward: 'Enciclopedia 0.19% (Legacy)',
    id: 'seis',
  },
  {
    level: 7,
    points: 2015,
    description: 'Emprendedor',
    reward: 'Técnicas de Elusión Fiscal',
    id: 'siete',
  },
  {
    level: 8,
    points: 8015,
    description: 'Dueño de Holding',
    reward: 'Global project.',
    id: 'ocho',
  },
  {
    level: 9,
    points: 33015,
    description: 'Simulation Creator',
    reward: 'Secret',
    id: 'nueve',
  },
];
