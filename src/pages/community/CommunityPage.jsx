import React from 'react';
import ModelMainPro from '@/layouts/ModelMainPro';
import ModelAsideRight from '@/layouts/ModelAsideRight';

import LineLevels from '@/components/LineLevels';
import { useCommunity } from '@/context/CommunityContext';
import { MainTitle } from '@/pages/WellcomePage';
import { useEffect } from 'react';
import YouTube from 'react-youtube';

export default function CommunityPage() {
  const { page, onChangePage } = useCommunity();

  useEffect(() => {
    console.log(page);
  }, [page]);

  const COMMUNITY_PAGES = {
    Introducción: <IntroductionPage />,
    Niveles: <LevelsPage />,
    Normas: <RulesPage />,
    Fianzas: <BailPage />,
    Directos: <StreamingsPage />,
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
  { title: 'Sistema de Fianzas', value: 'Fianzas' },
  { title: 'Directos', value: 'Directos' },
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
        <YouTubeVideo url='https://www.youtube.com/embed/cqPNrRBUSUg?si=vQS5oaum8JVBklyw' />
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
function YouTubeVideo({ url }) {
  return (
    <iframe
      width='560'
      height='315'
      src={url}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      referrerPolicy='strict-origin-when-cross-origin'
      allowFullScreen
      id='video'
    ></iframe>
  );
}
function BailPage() {
  return (
    <section>
      <YouTubeVideo url='https://youtube.com/embed/1rs38CE7wnA?si=yxvcHfXe8zQ07D99' />
      <p>
        Pasos a seguir para cumplir tus objetivos del mes: Paso 1. Apunta tus
        objetivos del mes Paso 2. Ve a esta página web Paso 3. Escoge la fianza
        mas acorde a tus objetivos y haz el pago Paso 4. Ve al apartado de
        fianzas en los canales de la comunidad y rellena la plantilla del
        comentario fijado Paso 5. Crea el drive abierto donde subirás tus
        pruebas comprobables y medibles y adjúntalo en tu comentario. A final de
        mes se te contactará por privado
        https://carlos-adams.com/sistema-de-fianzas/
      </p>
      <YouTubeVideo url='https://youtube.com/embed/7pGuBEsHwNE?si=xrHM_IJwyoLq7rvW' />
    </section>
  );
}
function StreamingsPage() {
  return (
    <section>
      <YouTubeVideo url='https://youtube.com/embed/1rs38CE7wnA?si=yxvcHfXe8zQ07D99' />
    </section>
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
const categories = [
  {
    title: 'Anuncios',
    content: 'Todas los anuncios importantes estarán aquí.',
  },
  {
    title: 'Wins',
    content:
      'Poned vuestros historias de éxito gracias a la comunidad en estos años y las que vendrán a partir de ahora. Poned imágenes también.',
  },
  {
    title: 'La Oficina',
    content:
      'A diferencia de 🍺 Afterwork en 👔 La oficina pondremos todos los aportes de valor a la comunidad.',
  },
  {
    title: 'Afterwork',
    content:
      'En esta canal podrás charlar de cualquier cosa. Adiós a los insulsos, aquí estarán emprendedores y gente de tu misma ciudad.',
  },
  {
    title: 'Intros',
    content: 'En esta canal todos han de hacer su presentación.',
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
