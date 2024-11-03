/** @format */
'use client';

import Link from 'next/link';
import AvatarUser from '@/app/(protected)/_components/AvatarUser';
// import MessagesIcon from '@/icons/MessagesIcon';
// import NotificationsIcon from '@/icons/NotificationsIcon';
import SaveIcon from '@/icons/SaveIcon';
// import GoalsIcon from '@/icons/GoalsIcon';
import GameIcon from '@/icons/GameIcon';
// import BusinessIcon from '@/icons/BusinessIcon';
// import PigIcon from '@/icons/PigIcon';
// import NewPostIcon from '@/icons/NewPostIcon';
import LogOutButton from './LogOutButton';
import Image from 'next/image';
import { useUserProfile } from '@/hooks/userProfileHook';
import { useEffect } from 'react';

export default function AsideProfile() {
  const { userProfile, loadUserProfile } = useUserProfile();
  console.log('userProfile', userProfile);
  useEffect(() => {
    loadUserProfile();
  }, [loadUserProfile]);

  const asideProfileLinks = [
    // { to: '/notifications', title: 'Notificaciones', icon: NotificationsIcon },
    // { to: '/messages', title: 'Mensajes', icon: MessagesIcon },
    { to: '/saved', title: 'Guardados', icon: SaveIcon },
  ];

  return (
    <>
      <header id='profile' className='blurr'>
        <Link href='/profile' id='profile-link'>
          <Image
            id='cover'
            src='https://i.ibb.co/frmtYRP/Angel-Caido-5-MB.jpg'
            alt=''
            width={800}
            height={600}
          />
          <AvatarUser
            alt='Foto de perfil'
            src={userProfile?.miniAvatar || ''}
            size='user'
            status='entrepeneur'
          />
          <h4>{`${userProfile?.firstName} ${userProfile?.lastName}`}</h4>
        </Link>
        <p id='bio'>{userProfile?.bio}</p>
        <hr />
        <div id='score'>
          {/* <div>
            <BusinessIcon />
            <h6>
              Negocio &#8227;
              <span> Fase 0</span>
            </h6>
          </div>
          <div>
            <PigIcon />
            <h6>
              Fianza &#8227;
              <span> Activada &#183; 50€</span>
            </h6>
          </div> */}
          <div>
            <GameIcon />
            <h6>
              Nivel &#8227;
              <span>
                {' '}
                {userProfile?.score?.lv} &#183; {userProfile?.score?.pts} pts
              </span>
            </h6>
          </div>
        </div>
        {/* <Link href='/planning' id='goals-link'>
          <GoalsIcon />
          <h2>Planificación</h2>
        </Link> */}
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
        <LogOutButton />
        {/* <NewPostLink /> */}
      </footer>
    </>
  );
}

// function NewPostLink() {
//   return (
//     <Link
//       href='/home/new-post'
//       className='aside-link orange-hover blurr'
//       id='new-post-link'
//     >
//       <NewPostIcon />
//       <span className='impact'>Nuevo Post</span>
//     </Link>
//   );
// }
