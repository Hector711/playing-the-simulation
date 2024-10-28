import Link from 'next/link';
import AvatarUser from '@/app/(protected)/_components/AvatarUser';
// import MessagesIcon from '@/icons/MessagesIcon';
// import NotificationsIcon from '@/icons/NotificationsIcon';
import SaveIcon from '@/icons/SaveIcon';
// import GoalsIcon from '@/icons/GoalsIcon';
import GameIcon from '@/icons/GameIcon';
import BusinessIcon from '@/icons/BusinessIcon';
import PigIcon from '@/icons/PigIcon';
// import NewPostIcon from '@/icons/NewPostIcon';
import LogOutButton from './LogOutButton';
import Image from 'next/image';

export default function AsideProfile() {
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
          />
          <AvatarUser
            alt='Foto de perfil'
            src='https://i.ibb.co/s5smtmL/profile-pic.jpg'
            size='user'
            status='entrepeneur'
          />
          <h4>Héctor Guerra</h4>
        </Link>
        <hr />
        <div id='profile-info'>
          <div>
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
          </div>
          <div>
            <GameIcon />
            <h6>
              Nivel &#8227;
              <span> 4 &#183; 400 pts</span>
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
