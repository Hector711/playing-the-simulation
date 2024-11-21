'use client';

import Link from 'next/link';
import SaveIcon from '@/icons/SaveIcon';
import HeaderProfile from '@/components/HeaderProfile';
import { useUserProfile } from '@/hooks/userProfileHook';
import { useEffect } from 'react';
// import MessagesIcon from '@/icons/MessagesIcon';
// import NotificationsIcon from '@/icons/NotificationsIcon';
import AvatarUser from '@/app/(protected)/_components/AvatarUser';
import GameIcon from '@/icons/GameIcon';
import BusinessIcon from '@/icons/BusinessIcon';
import PigIcon from '@/icons/PigIcon';
// import NewPostIcon from '@/icons/NewPostIcon';
import Image from 'next/image';
import type { UserProfileTypes } from '@/types/userTypes';

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
    <div id='aside-profile'>
      {userProfile && <HeaderProfile userProfile={userProfile} />}

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
    </div>
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
