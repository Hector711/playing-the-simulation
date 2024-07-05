import React from 'react';
import { NavLink } from 'react-router-dom';
import IconLike from '@/icons/IconLike';
import IconComment from '@/icons/IconComment';
import Participants from '@/icons/Participants';
import Subscribe from '@/icons/Subscribe';

export default function ProjectCard({
  title,
  description,
  slug,
  likes,
  autor,
  comments,
  participants,
}) {
  return (
    <NavLink to={slug} className='project-cards blurr'>
      <article>
        <header>
          <h4>{title}</h4>
        </header>
        <aside>
          {participants !== undefined && (
            <button>
              <Subscribe subcribe='' />
            </button>
          )}
        </aside>
        <section className='description'>
          <p>{description}</p>
          {/* <Avatar src={img} business='true' /> */}
        </section>
        <section className='autor'>
          <h6>por {autor}</h6>
        </section>
        <footer>
          <button>
            {likes}
            <IconLike />
          </button>
          <button>
            {comments}
            <IconComment />
          </button>
          {participants !== undefined && (
            <button>
              {participants}
              <Participants />
            </button>
          )}
        </footer>
      </article>
    </NavLink>
  );
}
