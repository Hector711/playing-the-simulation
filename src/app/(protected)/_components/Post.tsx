import React from 'react';
import Avatar from '@/app/(protected)/_components/Avatar';
import Link from 'next/link';
import LikeIcon from '@/icons/LikeIcon';
import CommentIcon from '@/icons/CommentIcon';
import SendIcon from '@/icons/SendIcon';
import SaveIcon from '@/icons/SaveIcon';
import { PostTypes } from '@/types';

const LABELS_CODES = {
  '9aeac4f45ffd43e6a9ffb99856017ff0': 'La Oficina 👔',
  '': 'Finanzas 💰',
  '': 'Anuncios 🚨',
  f02b7bac3b22490492fb6cac6fa2510e: 'Wins 🏆',
  '0c909393bcb444b089199a8b64f2d14a': 'Afterwork 🍺',
  '': 'Fianzas 🎯',
  '': 'Intros 👨‍💻',
  '': 'Retos ⚔️',
  '': 'Elevator Pitch (Proyectos) 🛗',
  '5875bca6326c4f4d9e7833674e1f21f3': 'Trabajo (Oferta/Demanda) 💼',
};

export default function Post({
  labels,
  id,
  createdAt,
  user,
  post,
  upvotes,
}: PostTypes) {
  // Asegúrate de que 'labels' es una de las claves válidas
  const labelKey = labels as keyof typeof LABELS_CODES;

  return (
    <article className='post' id={id}>
      <div className='post' id='top'>
        <a href='' className='underlined' id=''>
          {LABELS_CODES[labelKey]}
        </a>
      </div>
      <hr />

      <header className='post'>
        <Avatar
          src='https://firebasestorage.googleapis.com/v0/b/hacker-house-2024.appspot.com/o/users%2F1729731200000%2Fprofile.png?alt=media&token=64444444444444444444444444444444'
          business='true'
        />
        <div id='urls-container'>
          <h4>{`${user.firstName} ${user.lastName}`}</h4>
          <span>Hace 2 h</span>
        </div>
        <button id='save'>
          <SaveIcon className='post-icons' />
        </button>
      </header>

      <section className='post'>
        <Link href={`/post/${id}`}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </Link>
      </section>
      <hr />
      <footer className='post'>
        <button>
          <LikeIcon className='post-icons' /> {upvotes}
        </button>
        <button>
          <SendIcon className='post-icons' />
        </button>
      </footer>
    </article>
  );
}
