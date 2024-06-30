import React from 'react';
import ModelMain from '@/layouts/ModelMain';
import ModelAsideLeft from '@/layouts/ModelAsideLeft';
import ModelAsideRight from '@/layouts/ModelAsideRight';
import YouTubeVideo from '@/components/YouTubeVideo';
import LineLevels from '@/components/LineLevels';
import { useCommunity } from '@/context/CommunityContext';
import { MainTitle } from '@/pages/WellcomePage';
import { useParams, NavLink } from 'react-router-dom';

export default function CommunityPage() {
  const { slug } = useParams();
  const COMMUNITY_PAGES = {
    introduction: <IntroductionPage />,
    levels: <LevelsPage />,
    rules: <RulesPage />,
    bail: <BailPage />,
    calendar: <CalendarPage />,
  };

  return (
    <>
      <ModelAsideLeft id='community'>
        <NavLink to='/community' className=''>
          <h2 className='impact'>Comunidad</h2>
        </NavLink>
        {communityLinks.map(({ title, slug }, index) => (
          <NavLink
            to={`/community/${slug}`}
            key={index}
            className='community-links orange-hover'
          >
            <h5>{title}</h5>
          </NavLink>
        ))}
      </ModelAsideLeft>
      {slug ? (
        COMMUNITY_PAGES[slug]
      ) : (
        <ModelMain className='home' id='community'>
          <article className='community' id='start'>
            <MainTitle />
            <YouTubeVideo url='https://www.youtube.com/embed/cqPNrRBUSUg?si=vQS5oaum8JVBklyw' />
          </article>
        </ModelMain>
      )}
      <ModelAsideRight id='community'>
        Contacta con los admninistradores
      </ModelAsideRight>
    </>
  );
}

const communityLinks = [
  { title: 'Introducción', slug: 'introduction' },
  { title: 'Niveles', slug: 'levels' },
  { title: 'Sistema de Fianzas', slug: 'bail' },
  { title: 'Normas', slug: 'rules' },
  { title: 'Eventos', slug: 'calendar' },
];

function LevelsPage() {
  const { levels } = useCommunity();
  return (
    <ModelMain className='home community-page' title='Niveles' id='levels-page'>
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

function IntroductionPage() {
  return (
    <ModelMain className='home community-page' title='Introducción'>
      <section>
        <YouTubeVideo url='https://youtube.com/embed/K5DP4p5otPo?si=sG5Jtji_Cwxj26nw' />
        <p>
          Canales de la comunidad:
          <ul>
            {categories.map(({ title, content }, i) => (
              <li key={i}>
                <h4>{title}</h4> <p>{content}</p>
              </li>
            ))}
          </ul>
        </p>
        <YouTubeVideo url='https://youtube.com/embed/-7Iv19JomWQ?si=YrBbRj-gfM0wKwSW' />
        <YouTubeVideo url='https://youtube.com/embed/epJi4uLw27s?si=naWaFYdsw96ed6la' />
      </section>
    </ModelMain>
  );
}

function RulesPage() {
  return (
    <ModelMain className='home community-page' title='Normas de la comunidad'>
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
    </ModelMain>
  );
}

function BailPage() {
  return (
    <ModelMain className='home community-page' title='Sistema de fianzas'>
      <YouTubeVideo url='https://youtube.com/embed/1rs38CE7wnA?si=yxvcHfXe8zQ07D99' />
      <p>
        Pasos a seguir para cumplir tus objetivos del mes: Paso 1. Apunta tus objetivos del mes Paso 2. Ve a esta página web Paso 3. Escoge la fianza mas acorde a tus objetivos y haz el pago Paso 4. Ve al apartado de fianzas en los canales de la comunidad y rellena la plantilla del comentario fijado Paso 5. Crea el drive abierto donde subirás tus pruebas comprobables y medibles y adjúntalo en tu comentario. A final de mes se te contactará por privado
        https://carlos-adams.com/sistema-de-fianzas/
      </p>
      <YouTubeVideo url='https://youtube.com/embed/7pGuBEsHwNE?si=xrHM_IJwyoLq7rvW' />
    </ModelMain>
  );
}

function CalendarPage() {
  return (
  <ModelMain title='Eventos' className='home community-page'>
  <section>

  </section>
  </ModelMain>)
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
];

const categories = [
  {
    title: 'Afterwork',
    content: 'Charla informal.',
  },
  {
    title: 'Wins',
    content:
      'Sección dedicada a los meritos, logros, informes de ejecución y demás historias de exitos. Aportará puntos extras.',
  },
  {
    title: 'Biblioteca',
    content:
      'Todos los aportes de valor a la comunidad. Aportará puntos extras.',
  },
  {
    title: 'Retos',
    content:
      'Aquí todos pueden publicar sus retos ademas de los retos oficiales de la comunidad.',
  },
  {
    title: 'Elevator Pitch (Proyectos)',
    content:
      'Publica un elevator pitch de tu proyecto y presenta a la comunidad.',
  },
  {
    title: 'Brainstorming',
    content: 'Publica tus ideas y recibe feedback de la comunidad.',
  },
];

// {
//   title: 'Noticias',
//   content: 'Todas los tipos de anuncios irán aqui: nuevo contenido, nuevos eventos, avisos, etc.',
// },
