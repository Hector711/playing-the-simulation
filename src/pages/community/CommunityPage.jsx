import React from 'react';
import ModelMain from '@/layouts/ModelMain';
import YouTubeVideo from '@/components/YouTubeVideo';
import ModelAsideLeft from '@/layouts/ModelAsideLeft';
import ModelAsideRight from '@/layouts/ModelAsideRight';
import { MainTitle } from '@/pages/WellcomePage';
import { useParams, NavLink } from 'react-router-dom';
import IntroductionPage from '@/pages/community/IntroductionPage';
import LevelsPage from '@/pages/community/LevelsPage';
import RulesPage from '@/pages/community/RulesPage';
import BailsSystemPage from '@/pages/community/BailsSystemPage';
import CalendarPage from '@/pages/community/CalendarPage';

export default function CommunityPage() {
  const { slug } = useParams();
  const COMMUNITY_PAGES = {
    introduccion: <IntroductionPage />,
    niveles: <LevelsPage />,
    normas: <RulesPage />,
    'sistema-de-fianzas': <BailsSystemPage />,
    eventos: <CalendarPage />,
    directos: <></>,
  };

  return (
    <>
      <ModelAsideLeft id='community'>
        <NavLink to='/community' className=''>
          <h2 className='impact'>Comunidad</h2>
        </NavLink>
        {communityLinks.map(({ title, slug }, index) => (
          <NavLink
            to={`/comunidad/${slug}`}
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
        <ModelMain className='home community-page'>
          <header className='community-page'>
            <MainTitle />
          </header>
          <article className='community-page'>
            <YouTubeVideo url='https://www.youtube.com/embed/cqPNrRBUSUg?si=vQS5oaum8JVBklyw' />
          </article>
        </ModelMain>
      )}
      <ModelAsideRight id='community'>
        <h2 className='impact'>Contacto</h2>
        {contacts.map(({ name, role, url }, index) => (
          <article>
            <header>
              <h4>{name}</h4>
            </header>
            <section>
              <h3>{role}</h3>
              <button>Enviar Mensaje</button>
            </section>
          </article>
        ))}
      </ModelAsideRight>
    </>
  );
}

const contacts = [
  {
    name: 'Lucas Alessandro',
    role: 'Community Manager',
    url: '',
  },
  {
    name: 'Héctor Guerra',
    role: 'Diseñador de Aplicación',
    url: '',
  },
];

const communityLinks = [
  { title: 'Introducción', slug: 'introduccion' },
  { title: 'Niveles', slug: 'niveles' },
  { title: 'Sistema de Fianzas', slug: 'sistema-de-fianzas' },
  { title: 'Normas', slug: 'normas' },
  { title: 'Eventos', slug: 'eventos' },
  { title: 'Directos', slug: 'diretos' },
];
