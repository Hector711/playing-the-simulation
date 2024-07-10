import React from 'react';
import ModelAsideRight from '@/layouts/ModelAsideRight';
import ModelMain from '@/layouts/ModelMain';
import Avatar from '@/components/Avatar';
import AddUser from '@/icons/AddUser';
import LinkedIn from '@/icons/LinkedIn';
import X from '@/icons/X';
import YouTube from '@/icons/YouTube';
import Instagram from '@/icons/Instagram';
import GitHub from '@/icons/GitHub';
import Location from '@/icons/Location';
import Game from '@/icons/Game';
import YoutubeVideo from '@/components/YouTubeVideo';
import { useProfile } from '@/context/ProfileContext';
import CalendlyPopUp from '@/components/CalendlyPopUp';

export default function ProfilePage() {
  const { onAddPopUp } = useProfile();

  return (
    <div id='profile-page'>
      <ModelMain className='profile-page' id='profile-page-left'>
        <CalendlyPopUp />
        <header className='profile-page blurr'>
          <img
            id='cover'
            src='https://i.ibb.co/wJZg9tG/Angel-Caido-5-MB.jpg'
            alt='Cover'
          />
          <Avatar
            src='https://i.ibb.co/s5smtmL/profile-pic.jpg'
            business='yes'
          />
          <div id='left-info'>
            <h1>Héctor Guerra</h1>
            <h2>Full Stack Web Developer</h2>
            <div className='flex gap-[10px] mt-[10px]'>
              <Location />
              <p> Madrid, España.</p>
            </div>
            <div className='flex gap-[10px] my-[10px]'>
              <Game />
              <p> Nivel 4 &#8226; 200 pts</p>
            </div>
            <div id='rrss'>
              <a href='' target='_blank'>
                <LinkedIn />
              </a>
              <a href='' target='_blank'>
                <X />
              </a>
              <a href='' target='_blank'>
                <GitHub />
              </a>
              <a href='' target='_blank'>
                <Instagram />
              </a>
              <a href='' target='_blank'>
                <YouTube />
              </a>
              <a
                href='https://hector-minimalist-cv.netlify.app/'
                target='_blank'
                id='cv'
              >
                <h5>Minimal CV</h5>
              </a>
            </div>
          </div>
          <div id='right-info'>
            <button id='add' onClick={onAddPopUp}>
              <h5>Agregar</h5>
              <AddUser />
            </button>
          </div>
          {/* SCORE */}
          <div id='score' className='mini-section'>
            <hr className='mini-section' />
            <div>
              <span>23 </span>
              <p>Contactos</p>
            </div>
            <div>
              <span>12</span>
              <p>Aportaciones</p>
            </div>
            <div>
              <span>13</span>
              <p>Wins</p>
            </div>
          </div>
        </header>
        <hr />
        <section id='wins' className='profile-page blurr'>
          <div id='business' className='mini-section'>
            <h3 className='section impact'>Negocios y proyectos</h3>
            <div id='container-grid'>
              <a href='' className='cards business'>
                <h6>Negocio 1</h6>
                <p>Descripción del proyecto 1</p>
              </a>
              <a href='' className='cards business'>
                <h6>Negocio 2</h6>
                <p>Descripción del proyecto 1</p>
              </a>
              <a href='' className='cards projects'>
                <h6>Proyecto 1</h6>
                <p>Descripción del proyecto 1</p>
              </a>
            </div>
          </div>
        </section>
        <hr />
        <section id='posts' className='profile-page blurr'>
          <h3 className='section impact'>Posts</h3>
        </section>
      </ModelMain>

      <ModelAsideRight className='profile-page blurr' id='right' title='Presentación'>
        {/* <h3 className='impact'>Presentación</h3> */}
        <YoutubeVideo url='https://www.youtube.com/embed/GzARMgH2gec?si=Dua6afMJQ-Azffja' />
          <p>
            𝙄𝙣𝙩𝙧𝙤𝙙𝙪𝙘𝙘𝙞𝙤́𝙣:
            <br />
            Héctor Guerra Madrid, España 🇪🇸
            <br />
            <br />
            𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤́𝙣 𝙋𝙧𝙤𝙛𝙚𝙨𝙞𝙤𝙣𝙖𝙡:
            <br />
            Full Stack Web Developer (Junior) Tengo intenciones de crear mi
            propio negocio en los próximas semanas / meses. Busco gente con la
            que colaborar y currar a tope.
            <br />
            <br />
            𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖 𝙮 𝙃𝙖𝙗𝙞𝙡𝙞𝙙𝙖𝙙𝙚𝙨:
            <br />
            He estado trabajando en la hostelería de bartender y camarero, pero
            hace menos de un año empece a estudiar programación y estoy a punto
            de tener mi primer empleo. Full Stack (soy un friki)
            <br />
            <br />
            𝙊𝙗𝙟𝙚𝙩𝙞𝙫𝙤𝙨 𝙚𝙣 𝙡𝙖 𝘾𝙤𝙢𝙪𝙣𝙞𝙙𝙖𝙙:
            <br />
            Busco aprender, AYUDAR y encontrar a personas que se encuentren en
            mi mismo camino. Si necesitas ayuda sobre programacion IM YOUR MAN!
            <br />
            <br />
            𝙄𝙣𝙩𝙚𝙧𝙚𝙨𝙚𝙨 𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙡𝙚𝙨:
            <br />
            Desarrollo personal, filosofía, IA, deporte, de todo… digo que si a
            todo!
          </p>
      </ModelAsideRight>
    </div>
  );
}
