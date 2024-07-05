import React from 'react';
import { NavLink } from 'react-router-dom';
import IconLike from '@/icons/IconLike';
import IconComment from '@/icons/IconComment';
import Checks from '@/icons/Checks';
import Completed from '@/icons/Completed';
import Avatar from '@/components/Avatar';
import Participants from '@/icons/Participants';
import AddUser from '@/icons/AddUser';

export default function PlaygroundCard({
  title,
  description,
  img,
  slug,
  likes,
  timesCompleted,
  completed,
  points,
  autor,
  comments,
  participants
}) {
  return (
    <NavLink to={slug} className='playground-cards blurr'>
      <article>
        <header>
          <h4>{title}</h4>
        </header>
        {autor ? (
          <section className='autor'>
            <Avatar src={img} business='true' />
            <h6>{autor}</h6>
          </section>
        ) : (
          <section className='description'>
            <p>{description}</p>
          </section>
        )}
        <aside>
          {completed !== undefined && <Completed completed={completed} />}
          {participants !== undefined && (
            <button>
              <AddUser />
            </button>
          
          )}
        </aside>
        <div className='points'>
          {points && <p>{points} pts</p> }
        </div>
        <footer>
          <button>
            {likes}
            <IconLike />
          </button>
          <button>
            {comments}
            <IconComment />
          </button>
          {timesCompleted !== undefined && (
            <button>
              {timesCompleted}
              <Checks />
            </button>
          )}
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
