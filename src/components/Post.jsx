import React from 'react';
import Avatar from './Avatar';
import { NavLink } from 'react-router-dom';
import IconLike from '@/icons/IconLike';
import IconComment from '@/icons/IconComment';
import IconSend from '@/icons/IconSend';
import IconSave from '@/icons/IconSave';

export default function Post({
  profilePic,
  title,
  description,
  fullName,
  username,
  urlPost,
  urlProfile,
  labels,
  type,
  numLikes,
  numComments,
  deleteById,
  save,
  post,
}) {
  return (
    <article className='post'>
      <div className='post' id='top'>
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

      <header className='post'>
        <NavLink to={urlProfile}>
          <Avatar src={profilePic} business='true' />
        </NavLink>
        <div id='urls-container'>
          <NavLink to={urlProfile} id='url-profile'>
            <h4>{fullName}</h4>
            <span>&#8226; @{username}</span>
          </NavLink>
          <NavLink to={urlPost} id='url-post'>
            <span>Hace 2 h</span>
          </NavLink>
        </div>
        <button id='save' onClick={() => save(post)}>
          <IconSave className='post-icons' />
        </button>
        <button id='save' onClick={() => deleteById(post)}>
          Delete
        </button>
      </header>

      <section className='post'>
        <NavLink to={urlPost}>
          <h4>{title}</h4>
          <p>{description}</p>
        </NavLink>
      </section>
      <hr />
      <footer className='post'>
        <button>
          <IconLike className='post-icons' /> {numLikes}
        </button>
        <button>
          <IconComment className='post-icons' /> {numComments}
        </button>

        <button>
          <IconSend className='post-icons' />
        </button>
      </footer>
    </article>
  );
}
