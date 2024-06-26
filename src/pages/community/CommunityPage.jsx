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
import CategoriesPage from '@/pages/community/CategoriesPage';
import { Link } from 'react-router-dom';

export default function CommunityPage() {
  const { slug } = useParams();
  const COMMUNITY_PAGES = {
    introduccion: <IntroductionPage />,
    niveles: <LevelsPage />,
    categorias: <CategoriesPage />,
    normas: <RulesPage />,
    'sistema-de-fianzas': <BailsSystemPage />,
    eventos: <CalendarPage />,
    directos: <></>,
  };

  return (
    <>
      <ModelAsideLeft id='community'>
        <NavLink to='/comunidad' className=''>
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
          <section >
            <YouTubeVideo url='https://www.youtube.com/embed/cqPNrRBUSUg?si=vQS5oaum8JVBklyw' />
          </section>
        </ModelMain>
      )}
      <ModelAsideRight id='community-right'>
        <h2 className='impact'>Contacto</h2>
        {contacts.map(({ name, role, url, message }, i) => (
          <Link key={i}>
            <article className='contact-card'>
              <header>
                <h4>{name}</h4>
                <h6>{role}</h6>
              </header>
              <section>
                {message && <p>{message}</p>}
              </section>
            </article>
          </Link>
        ))}
      </ModelAsideRight>
    </>
  );
}

const contacts = [
  {
    name: 'Carlos Adams',
    role: 'Final Boss',
    message:
      'Deja aquí tu duda para que Carlos la resuelva en la reunión grupal de cada domingo.',
    url: '',
  },
  {
    name: 'Lucas Alessandro',
    role: 'Community Manager',
    url: '',
    message: 'Dudas sobre la comunidad, eventos, fianza, etc',
  },
  {
    name: 'Héctor Guerra',
    role: 'Diseñador de Aplicación',
    url: '',
    message: 'Dudas sobre la aplicación, reporte de errores, sugerencias, etc.',
  },
];

const communityLinks = [
  { title: 'Introducción', slug: 'introduccion' },
  { title: 'Normas', slug: 'normas' },
  { title: 'Niveles', slug: 'niveles' },
  { title: 'Categorias', slug: 'categorias' },
  { title: 'Sistema de Fianzas', slug: 'sistema-de-fianzas' },
  { title: 'Eventos', slug: 'eventos' },
  { title: 'Directos', slug: 'diretos' },
];
