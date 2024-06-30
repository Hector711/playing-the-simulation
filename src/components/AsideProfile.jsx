import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import Avatar from '@/components/Avatar';
import IconNotifications from '@/icons/IconNotifications';
import IconMessages from '@/icons/IconMessages';
import IconSave from '@/icons/IconSave';
import IconGoals from '@/icons/IconGoals';
import ModelAsideLeft from '@/layouts/ModelAsideLeft';
import Game from '@/icons/Game';
import Business from '@/icons/Business';
import Pig from '@/icons/Pig';

export default function AsideProfile() {
  const { logout } = useAuth();
  const asideProfileLinks = [
    { to: '/notifications', title: 'Notificaciones', icon: IconNotifications },
    { to: '/messages', title: 'Mensajes', icon: IconMessages },
    { to: '/saved', title: 'Guardados', icon: IconSave },
  ];

  return (
    <ModelAsideLeft>
      <header id='profile'>
        <NavLink to='/profile' id='profile-link'>
          <img
            id='cover'
            src='https://i.ibb.co/wJZg9tG/Angel-Caido-5-MB.jpg'
            alt=''
          />
          <Avatar
            src='https://i.ibb.co/s5smtmL/profile-pic.jpg'
            business='yes'
          />
          <h4>Héctor Guerra</h4>
        </NavLink>
        <hr />
        <div id='profile-info'>
          <div>
            <Business />
            <h6>
              Negocio &#8227;
              <span> Fase 0</span>
            </h6>
          </div>
          <div>
            <Pig />
            <h6>
              Fianza &#8227;
              <span> Activada &#183; 50€</span>
            </h6>
          </div>
          <div>
            <Game />
            <h6>
              Nivel &#8227;
              <span> 4 &#183; 400 pts</span>
            </h6>
          </div>
        </div>
        <NavLink id='goals-link' to='/planning'>
          <IconGoals />
          <h2>Planificación</h2>
        </NavLink>
      </header>
      <section id='profile-links'>
        {asideProfileLinks.map(({ to, title, icon: Icon }, i) => {
          return (
            <NavLink className='aside-link orange-hover' to={to} key={i}>
              <Icon className='aside-icons' />
              <h2>{title}</h2>
            </NavLink>
          );
        })}
        <NavLink>Nuevo Post</NavLink>
      </section>
      <footer id='logout'>
        <NavLink
          id='logout'
          to='/'
          onClick={() => {
            logout();
          }}
        >
          <h6>Cerrar Sesión</h6>
        </NavLink>
      </footer>
    </ModelAsideLeft>
  );
}
