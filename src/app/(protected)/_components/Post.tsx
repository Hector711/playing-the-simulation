import React from 'react';
import AvatarUser from '@/app/(protected)/_components/AvatarUser';
// import Link from 'next/link';
// import LikeIcon from '@/icons/LikeIcon';
// import CommentIcon from '@/icons/CommentIcon';
// import SendIcon from '@/icons/SendIcon';
import SaveIcon from '@/icons/SaveIcon';
import { PostTypes, Timestamp } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

// const LABELS_CODES = {
//   '9aeac4f45ffd43e6a9ffb99856017ff0': 'La Oficina 👔',
//   '': 'Finanzas 💰',
//   '': 'Anuncios 🚨',
//   f02b7bac3b22490492fb6cac6fa2510e: 'Wins 🏆',
//   '0c909393bcb444b089199a8b64f2d14a': 'Afterwork 🍺',
//   '': 'Fianzas 🎯',
//   '': 'Intros 👨‍💻',
//   '': 'Retos ⚔️',
//   '': 'Elevator Pitch (Proyectos) 🛗',
//   '5875bca6326c4f4d9e7833674e1f21f3': 'Trabajo (Oferta/Demanda) 💼',
// };

export default function Post({ id, user, post, metadata }: PostTypes) {
  const timestamp = metadata?.createdAt;
  function fechaRelativa(time: Timestamp) {
    if (!time || typeof time.seconds !== 'number') {
      return 'Fecha no disponible';
    }
    const milisegundos = time.seconds * 1000;
    const fecha = new Date(milisegundos);
    if (isNaN(fecha.getTime())) {
      return 'Fecha no disponible';
    }
    return formatDistanceToNow(fecha, { addSuffix: true, locale: es });
  }
  return (
    <article className='post' id={id}>
      <header className='post'>
        <figure>
          <AvatarUser
            src={user.miniAvatar}
            alt={user.firstName}
            size='post'
            status='employee'
          />
        </figure>
        <div id='urls-container'>
          <h4>{`${user.firstName} ${user.lastName}`}</h4>
          <span>{fechaRelativa(timestamp)}</span>
        </div>
        <button id='save'>
          <SaveIcon />
        </button>
      </header>

      <section className='post'>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
      </section>
    </article>
  );
}
