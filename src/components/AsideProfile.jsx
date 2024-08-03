'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Avatar from '@/components/Avatar';

import IconNotifications from '@/icons/IconNotifications';
import IconMessages from '@/icons/IconMessages';
import IconSave from '@/icons/IconSave';
import IconGoals from '@/icons/IconGoals';
import Game from '@/icons/Game';
import Business from '@/icons/Business';
import Pig from '@/icons/Pig';
import Dots from '@/icons/Dots';
import Pencil from '@/icons/NewPost';

export default function AsideProfile() {
  const router = useRouter();

  const asideProfileLinks = [
    { to: '/notificaciones', title: 'Notificaciones', icon: IconNotifications },
    { to: '/mensajes', title: 'Mensajes', icon: IconMessages },
    { to: '/guardados', title: 'Guardados', icon: IconSave },
  ];

  return (
    <>
      <header id='profile' className='blurr'>
        <Link href='/mi-perfil' id='profile-link'>
          <img
            id='cover'
            src='https://i.ibb.co/frmtYRP/Angel-Caido-5-MB.jpg'
            alt=''
            />
          <Avatar
            src='https://i.ibb.co/s5smtmL/profile-pic.jpg'
            business='yes'
            />
          <h4>Héctor Guerra</h4>
        </Link>
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
        <Link id='goals-link' href='/planificacion'>
          <IconGoals />
          <h2>Planificación</h2>
        </Link>
      </header>
      <section id='profile-links'>
        {asideProfileLinks.map(({ to, title, icon: Icon }, i) => {
          return (
            <Link className='aside-link orange-hover blurr' href={to} key={i}>
              <Icon />
              <h2>{title}</h2>
            </Link>
          );
        })}
      </section>
      <footer id='logout'>
        <NewPostLink />
        <Link
          id='logout'
          href='/'
          onClick={() => {
            router.push('/login');
          }}
          >
          <Dots />
        </Link>
      </footer>
          </>

  );
}

function NewPostLink() {
  return (
    <router
      className='aside-link orange-hover blurr'
      id='new-post-link'
    >
      <Pencil />
      <span className='impact'>Nuevo Post</span>
    </router>
  );
}
