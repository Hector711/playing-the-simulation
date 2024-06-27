import React from 'react';
import ModelMainPro from '@/layouts/ModelMainPro';
import ModelAsideRight from '@/layouts/ModelAsideRight';
import Game from '@/icons/Game';
import LineLevels from '@/components/LineLevels';
import {useCommunity} from '@/context/CommunityContext';

export default function CommunityPage() {
  const { levels } = useCommunity();

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
                  <h6>{description}:&#160;</h6>
                  <span>{reward}</span>
                </section>
              </article>
            ))}
          </section>
        </article>
      </ModelMainPro>
      <ModelAsideRight id='community'>
        <button>
          <Game />
        </button>
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
  )
}

const communityButtons = [
  { title: 'Niveles', value: 'Niveles' },
  { title: 'Normas', value: 'Normas' },
  { title: 'Lore', value: 'Lore' },
  { title: 'Bonus', value: 'Bonus' },
  { title: 'Otros', value: 'Otros' },
];

