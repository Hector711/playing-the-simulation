import React, { useEffect } from 'react';
import Work from '@/icons/Work';
import { NavLink } from 'react-router-dom';
import Location from '@/icons/Location';
import Business from '@/icons/Business';
import Avatar from '@/components/Avatar';
import { useMembers } from '@/context/MembersContext';

export default function MembersGrid() {
  const { allUsers, isLoading, isError, error, show } = useMembers();
  useEffect(() => {
    allUsers();
  }, []);
  return (
    <>
      <section id='members-grid'>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error: {error.message}</div>}
        {show && show.map(user => <MemberCard key={user.id} {...user} />)}
      </section>
    </>
  );
}
function MemberCard({
  fullName,
  speciality,
  about,
  img,
  id,
  location,
  username,
  level,
  points,
  url,
  business,
}) {
  return (
    <article kay={id} className='memberCard'>
      <header className='memberCard'>
        <NavLink to={url}>
          <Avatar src={img} business={business} />
        </NavLink>
        <NavLink to={url} className='user'>
          <div>
            <h2 className='profile'>{fullName}</h2>
            <span>&#8226; @{username}</span>
          </div>
          {level === 10 ? <b>Final Boss</b> : <b>Nivel {level}</b>}
          <span> &#8226; {points} puntos</span>
        </NavLink>
      </header>

      <hr />

      <section className='memberCard'>
        <div id='left'>
          <p>
            <Location />
            {location}
          </p>
          <p id='job'>
            <Work />
            {speciality}
          </p>
        </div>
        <div id='business'>
          {business.length > 0
            ? business.map(({ name, url }, index) => (
                <a href={url} key={index}>
                  <p>
                    <Business />
                    {name}
                  </p>
                </a>
              ))
            : ''}
        </div>
      </section>

      <footer className='memberCard'>
        <p>{about}</p>
      </footer>
    </article>
  );
}
