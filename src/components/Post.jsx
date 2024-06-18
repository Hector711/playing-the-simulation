import React from 'react';
import Avatar from './Avatar';
import { NavLink } from 'react-router-dom';
import IconLike from '@/icons/IconLike';
import IconComment from '@/icons/IconComment';
import IconSend from '@/icons/IconSend';
import IconSave from '@/icons/IconSave';

export default function Post({
  title,
  description,
  user,
  size,
  url,
  labels,
  type,
}) {
  return (
    <article className='post'>
      <div id='nav'>
        <a href='' className='underlined' id='post-type'>
          {type}
        </a>
        <a href='' className='underlined' id=''>
          {labels}
        </a>
        <a href='' className='underlined' id=''>
          #Finanzas
        </a>
        <a href='' className='underlined' id=''>
          #Fiscalidad
        </a>
      </div>
      <hr />
      <header className='post-user'>
        <Avatar src='' business='true' />
        <h4>{user}</h4>
        <div>Hace 2 h</div>
      </header>
      <NavLink to={url}>
        <section>
          <h4>{title}</h4>
          <p>{description}</p>
        </section>
      </NavLink>
      <hr />
      <footer className='post'>
        <button>
          Like <IconLike className='post-icons' />
        </button>
        <button>
          Comentarios <IconComment className='post-icons' />
        </button>
        <button>
          Guardar <IconSave className='post-icons' />
        </button>
        <button>
          Enviar <IconSend className='post-icons' />
        </button>
      </footer>
    </article>
  );
}
