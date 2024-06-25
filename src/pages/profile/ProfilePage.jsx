import React, { useState } from 'react';
import ModelAsideRight from '@/layouts/ModelAsideRight';
import ModelMainPro from '@/layouts/ModelMainPro';
import Avatar from '@/components/Avatar';
import AddUser from '@/icons/AddUser';
import LinkedIn from '@/icons/LinkedIn';
import X from '@/icons/X';
import Close from '@/icons/Close';
import YouTube from '@/icons/YouTube';
import Instagram from '@/icons/Instagram';
import GitHub from '@/icons/GitHub';
import Location from '@/icons/Location';
import Game from '@/icons/Game';
import { PopupModal } from 'react-calendly';
import { useEffect } from 'react';

export default function ProfilePage() {
  const [state, setState] = useState({
    addPopUp: false,
    calendlyPopUp: false,
  });
  const onAddPopUp = () => {
    setState({
      ...state,
      addPopUp: true,
    });
  };
  const onCalendlyPopUp = () => {
    setState({
      ...state,
      addPopUp: false,
      calendlyPopUp: true,
    });
  };
  const onCloseAll = () => {
    setState({
      addPopUp: false,
      calendlyPopUp: false,
    });
  };
  useEffect(() => {}, [state]);

  return (
    <>
      <ModelMainPro className='left' id='profile'>
        {state.addPopUp && (
          <div id='blur'>
            <article className='add-pop-up'>
              <button onClick={onCloseAll} id='close'>
                <Close />
              </button>
              <header>
                <h3>Agregar a un usuario</h3>
              </header>
              <section>
                <p>
                  Para poder agregar a un contacto debes realizar una llamada de
                  mínimo 30 minutos con el/ella.
                </p>
              </section>
              <div>
                <button id='calendly-button' onClick={onCalendlyPopUp}>
                  <p>Reservar llamada en</p>
                  <span>Calendly</span>
                </button>
              </div>
            </article>
          </div>
        )}
        <PopupModal
          url='https://calendly.com/hector-guerra/llamada-1-a-1'
          pageSettings={{
            backgroundColor: '28282a',
            hideEventTypeDetails: false,
            hideLandingPageDetails: true,
            primaryColor: '',
            textColor: '3133c5',
          }}
          onModalClose={() =>
            setState({
              addPopUp: false,
              calendlyPopUp: false,
            })
          }
          open={state.calendlyPopUp}
          rootElement={document.getElementById('root')}
        />
        <header className='profile-page'>
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
                id='portfolio'
              >
                Portafolio
              </a>
            </div>
          </div>
          <div id='right-info'>
            <a
              href='https://hector-minimalist-cv.netlify.app/'
              target='_blank'
              id='cv'
            >
              <h5>Minimal CV</h5>
            </a>
            <button id='add' onClick={onAddPopUp}>
              <h5>Agregar</h5>
              <AddUser />
            </button>
            <a
              href='https://hector-minimalist-cv.netlify.app/'
              target='_blank'
              id='video'
            >
              <h5>Video Presentación</h5>
              <YouTube />
            </a>
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
        <section id='wins' className='profile-page'>
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
              <a href='' className='cards business'>
                <h6>Negocio 3</h6>
                <p>Descripción del proyecto 1</p>
              </a>
              <a href='' className='cards projects'>
                <h6>Proyecto 1</h6>
                <p>Descripción del proyecto 1</p>
              </a>
              <a href='' className='cards projects'>
                <h6>Proyecto 1</h6>
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
        <section id='posts' className='profile-page'>
          <h3 className='section impact'>Posts</h3>
        </section>
      </ModelMainPro>

      <ModelAsideRight />
    </>
  );
}

const CustomButtonExample = ({ utm, prefill, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button id='calendly-button' onClick={() => setIsOpen(true)}>
        <p>Reservar llamada en</p>
        <span>Calendly</span>
      </button>
      <PopupModal
        url={url}
        pageSettings={{
          backgroundColor: '28282a',
          hideEventTypeDetails: false,
          hideLandingPageDetails: true,
          primaryColor: '',
          textColor: '3133c5',
        }}
        // sirve para diferenciar de donde viene el usuario que se registra en calendly (opcional)
        utm={utm}
        prefill={prefill}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById('root')}
      />
    </div>
  );
};
