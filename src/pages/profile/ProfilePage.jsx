import React from 'react';
import { Link } from 'react-router-dom';
import ModelAsideRight from '@/layouts/ModelAsideRight';
import ModelMainPro from '@/layouts/ModelMainPro';
import Avatar from '@/components/Avatar';
import AddUser from '../../icons/AddUser';

export default function ProfilePage() {
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
          <h2 className='profile'>Héctor Guerra</h2>
          <h3>Full Stack Web Developer</h3>
          <p>Nivel 4: Funcionario</p>
          <p>Madrid, España.</p>
          <hr />
          <button id='add'>
            <h5>Agregar</h5>
            <AddUser />
          </button>
          <button id='follow'>
            <h5>Seguir</h5>
          </button>
          <a
            href='https://hector-minimalist-cv.netlify.app/'
            target='_blank'
            id='cv'
          >
            <h5>Minimal CV</h5>
          </a>
          <hr />
          <p>Business</p>
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
