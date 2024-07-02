import LineLevels from '@/components/LineLevels';
import { useCommunity } from '@/context/CommunityContext';
import ModelMain from '@/layouts/ModelMain';

export default function LevelsPage() {
  const { levels } = useCommunity();
  return (
    <ModelMain id='levels-page' className='community-common ' title='Niveles' >
      <LineLevels />
      <hr id='extra'/>
      <section className='community' id='levels-container'>
        {levels.map(({ level, points, description, reward }, i) => (
          <article key={i} className='level-cards'>
            <header className='level-cards'>
              <h5>Nivel {level}</h5>
              <span>&#160;&#8226; {points} puntos</span>
            </header>
            <section className='level-cards'>
              <h6>{description}:&#160;</h6>
              <span>{reward}</span>
            </section>
          </article>
        ))}
      </section>
    </ModelMain>
  );
}
