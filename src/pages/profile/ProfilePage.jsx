import React from 'react';
import { useParams } from 'react-router-dom';
import ModelAsideRight from '@/layouts/ModelAsideRight';
import ModelMainPro from '@/layouts/ModelMainPro';
import Avatar from '@/components/Avatar';
import AddUser from '@/icons/AddUser';
import LinkedIn from '@/icons/LinkedIn';
import X from '@/icons/X';
import WhatsApp from '@/icons/WhatsApp';
import YouTube from '@/icons/YouTube';
import Instagram from '@/icons/Instagram';
import GitHub from '@/icons/GitHub';
import Location from '@/icons/Location';
import Game from '@/icons/Game';

export default function ProfilePage() {
  const { id } = useParams();
  return (
    <>
      <ModelMainPro className='left' id='profile'>
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
            <div className='flex gap-[10px] mt-[10px]'>
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
            <button id='add'>
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
          <hr className='mini-section'/>
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
          {/* PROYECTOS */}
          <div id='projects' className='mini-section'>
            <h3 className='section impact'>Proyectos</h3>
            <div id='projects-grid'>
              <a href='' className='project-card'>
                <h6>Proyecto 1</h6>
                <p>Descripción del proyecto 1</p>
              </a>
              <a href='' className='project-card'>
                <h6>Proyecto 1</h6>
                <p>Descripción del proyecto 1</p>
              </a>
              <a href='' className='project-card'>
                <h6>Proyecto 1</h6>
                <p>Descripción del proyecto 1</p>
              </a>
              <a href='' className='project-card'>
                <h6>Proyecto 1</h6>
                <p>Descripción del proyecto 1</p>
              </a>
            </div>
          </div>
        </header>
        <hr />
        <section id='wins' className='profile-page'>
          Wins
        </section>
        <hr />
        <section id='posts' className='profile-page'>
          Posts
        </section>
      </ModelMainPro>
      <ModelAsideRight />
    </>
  );
}
