import React from 'react';
import ModelMainPro from '@/layouts/ModelMainPro';
import ModelAsideRight from '@/layouts/ModelAsideRight';
import Game from '@/icons/Game';
import LineLevels from '@/components/LineLevels';
import { useCommunity } from '@/context/CommunityContext';
import { MainTitle } from '@/pages/WellcomePage';
import { useEffect } from 'react';

export default function CommunityPage() {
  const { page, onChangePage } = useCommunity();

  useEffect(() => {
    console.log(page);
  }, [page]);

  const COMMUNITY_PAGES = {
    Introducción: <IntroductionPage />,
    Niveles: <LevelsPage />,
    Normas: <RulesPage />,
  };
  return (
    <>
      <ModelMainPro title={page} className='left' id='community'>
        {COMMUNITY_PAGES[page]}
      </ModelMainPro>

      <ModelAsideRight id='community'>
        {communityButtons.map(({ title, value }, index) => (
          <CommunityButton
            key={index}
            title={title}
            onClick={() => {
              onChangePage(value);
            }}
          />
        ))}
      </ModelAsideRight>
    </>
  );
}

function CommunityButton({ title, onClick }) {
  return (
    <button className='community-button' onClick={onClick}>
      <span>{title}</span>
    </button>
  );
}

const communityButtons = [
  { title: 'Introducción', value: 'Introducción' },
  { title: 'Niveles', value: 'Niveles' },
  { title: 'Normas', value: 'Normas' },
];

function LevelsPage() {
  const { levels } = useCommunity();
  return (
    <article className='community' id='levels'>
      <header className='community'>
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
              <h6>{description}:&#160;</h6>
              <span>{reward}</span>
            </section>
          </article>
        ))}
      </section>
    </article>
  );
}

function IntroductionPage() {
  return (
    <article className='community' id='introduction-page'>
      <header className='community'>
        <MainTitle />
      </header>
      <section>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/cqPNrRBUSUg?si=0_HE5hE3zEbjx8Az'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
          id='video'
        ></iframe>
      </section>
    </article>
  );
}

function RulesPage() {
  return (
    <>
      <article className='community' id='rules-page'>
        <h3>Normas a seguir en la comunidad</h3>
        <ul>
          {communityRules.map(({ rule }, i) => (
            <li>
              <h4>{i + 1}.</h4> <p>{rule}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}

const communityRules = [
  { rule: 'No se permitirán sindicalistas, ni socialistas.' },
  { rule: 'En las fotos de avatar se debe reconocer la cara del usuario.' },
  { rule: 'Las fotos de avatar de PTS y Telegram deben ser las mismas' },
  { rule: 'Nombres en PTS y Telegram deben ser los mismos.' },
  { rule: 'Los post de categoria Afterwork no aportarán puntos.' },
  {
    rule: 'Los post de categoria Afterwork se eliminarán una determinada cantidad de tiempo, y no aportarán puntos para subir de nivel.',
  },
  { rule: '' },
];

const businessPhases = [
  {
    phase: 1,
    revenue: '0-5.000€',
  },
  {
    phase: 2,
    revenue: '5.000-10.000€',
  },
  {
    phase: 3,
    revenue: '10.000-100.000€',
  },
];
