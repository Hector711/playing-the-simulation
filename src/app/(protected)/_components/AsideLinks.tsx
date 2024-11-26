import Link from 'next/link';
import SaveIcon from '@/icons/SaveIcon';
import MessagesIcon from '@/icons/MessagesIcon';
import NotificationsIcon from '@/icons/NotificationsIcon';
// import NewPostIcon from '@/icons/NewPostIcon';
import LogOutButton from '@/app/(protected)/_components/LogOutButton';

export default function AsideLinks() {
  const asideProfileLinks = [
    { to: '/notifications', title: 'Notificaciones', icon: NotificationsIcon },
    { to: '/messages', title: 'Mensajes', icon: MessagesIcon },
    { to: '/saved', title: 'Guardados', icon: SaveIcon },
  ];

  return (
    <section id='profile-links'>
      {asideProfileLinks.map(({ to, title, icon: Icon }, i) => {
        return (
          <Link className='aside-link orange-hover' href={to} key={i}>
            <Icon />
            <h2>{title}</h2>
          </Link>
        );
      })}
        <LogOutButton />
    </section>
  );
}

