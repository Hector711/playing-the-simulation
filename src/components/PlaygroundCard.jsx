import React from 'react';
import { NavLink } from 'react-router-dom';
import IconLike from '@/icons/IconLike';
import IconComment from '@/icons/IconComment';
import Checks from '@/icons/Checks';
import Completed from '@/icons/Completed';

export default function PlaygroundCard({
  title,
  description,
  img,
  slug,
  likes,
  timesCompleted,
  completed,
  points,
}) {
  return (
    <NavLink to={slug} className='playground-cards blurr'>
      <article>
        <header>
          <h4>{title}</h4>
        </header>
        <section>
          <p>{description}</p>
        </section>
        <aside>
          <Completed completed={completed} />
        </aside>
        <div className='points'>
          <p>{points} pts</p>
        </div>
        <footer>
          <button>
            {likes}
            <IconLike />
          </button>
          <button>
            {likes}
            <IconComment />
          </button>
          <button>
            {timesCompleted}
            <Checks />
          </button>
        </footer>
      </article>
    </NavLink>
  );
}
