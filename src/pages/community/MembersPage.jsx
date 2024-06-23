import React, { useState, useEffect } from 'react';
import ModelAsideLeft from '@/layouts/ModelAsideLeft';
import { NavLink } from 'react-router-dom';
import ModelMainPro from '@/layouts/ModelMainPro';
import Work from '@/icons/Work';
import Location from '@/icons/Location';
import Select from 'react-select';
import Business from '@/icons/Business';
import Avatar from '@/components/Avatar';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/api/usersAPI';

export default function MembersPage(props) {
  const {
    isLoading,
    isError,
    error,
    data: users,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // } else if (isError) {
  //   return <div>Error: {error.message}</div>;
  // }

  const [selectedValue, setSelectedValue] = useState('speciality');
  const [toggleShow, setToggleShow] = useState(false);
  const [filter, setFilter] = useState(null);
  const [allMembers, setAllMembers] = useState(true);
  const [specialityFilterShow, setSpecialityFilterShow] = useState(false);
  const [levelFilterShow, setLevelFilterShow] = useState(false);
  const handleSelectChange = option => {
    setSelectedValue(option.value);
  };
  useEffect(() => {
    if (selectedValue === 'level') {
      setToggleShow(true);
    } else {
      setToggleShow(false);
    }
  }, [selectedValue]);
  // Filtrar nivel
  const handleLevelFilterChange = event => {
    const valueFilter = event.target.value;
    const numericValue = Number(valueFilter);
    setFilter(numericValue);
  };
  // Filtrar especialidad
  const handleSpecialityFilterChange = event => {
    const valueFilter = event.target.value;
    setFilter(valueFilter);
  };
  // Filtrar
  useEffect(() => {
    if (typeof filter === 'number') {
      setLevelFilterShow(true);
      setSpecialityFilterShow(false);
      setAllMembers(false);
    } else if (typeof filter === 'string') {
      setLevelFilterShow(false);
      setSpecialityFilterShow(true);
      setAllMembers(false);
    } else {
      setAllMembers(true);
      setLevelFilterShow(false);
      setSpecialityFilterShow(false);
    }
  }, [filter]);

  const selectFilter = [
    { value: 'speciality', label: 'Por especialidad' },
    { value: 'level', label: 'Por nivel' },
  ];

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: '#1a1e23' }),
    option: styles => ({
      ...styles,
      backgroundColor: '#1a1e23',
      ':active': { ...styles[':active'], backgroundColor: '#565656de' },
    }),
    multiValue: styles => ({ ...styles, backgroundColor: '#f6921b' }),
    multiValueLabel: styles => ({ ...styles, color: '#111822' }),
  };

  return (
    <>
      <ModelAsideLeft id='members' className='community' title='Filtro'>
        <div className='select-filter'>
          <Select
            {...props}
            styles={colourStyles}
            options={selectFilter}
            id='category'
            placeholder='Categoría'
            className='react-select-container'
            classNamePrefix='react-select'
            onChange={handleSelectChange}
          />
        </div>
        <hr />
        <div className='filter-buttons'>
          {toggleShow ? (
            <>
              {LevelFilterButtons.map(({ value, level, points }, index) => (
                <FilterButton
                  key={index}
                  value={value}
                  onClick={handleLevelFilterChange}
                  level={level}
                  points={points}
                />
              ))}
            </>
          ) : (
            <>
              {SpecialityFilterButtons.map(({ value, speciality }, index) => (
                <FilterButton
                  key={index}
                  value={value}
                  onClick={handleSpecialityFilterChange}
                  speciality={speciality}
                />
              ))}
            </>
          )}
        </div>
      </ModelAsideLeft>

      <ModelMainPro id='members' title='Miembros de la comunidad'>
        {/* <section id='members-grid'>
          {allMembers &&
            members
              .sort((a, b) => a.fullName.localeCompare(b.fullName))
              .map(contact => <MemberCard key={contact.id} {...contact} />)}
          {specialityFilterShow &&
            members
              .filter(contact => contact.area === filter)
              .sort((a, b) => a.fullName.localeCompare(b.fullName))
              .map(contact => <MemberCard key={contact.id} {...contact} />)}
          {levelFilterShow &&
            members
              .filter(contact => contact.level === filter)
              .sort((a, b) => a.fullName.localeCompare(b.fullName))
              .map(contact => <MemberCard key={contact.id} {...contact} />)}
        </section> */}
        {/* <section id='members-grid'>
          {users
            .sort((a, b) => a.fullName.localeCompare(b.fullName))
            .map(contact => (
              <MemberCard key={contact.id} {...contact} />
            ))}
        </section> */}
      </ModelMainPro>
    </>
  );
}

function MemberCard({
  fullName,
  job,
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
          <Avatar src={img} business={business.length > 0} />
        </NavLink>

        <NavLink to={url} className='user'>
          <div>
            <h2 className='profile'>{fullName}</h2>
            <span>&#8226; @{username}</span>
          </div>
          <b>Nivel {level}</b>
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
            {job}
          </p>
        </div>
        <div id='business'>
          {business.length > 0
            ? business.map((company, index) => (
                <p key={index}>
                  <Business />
                  {company}
                </p>
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

function FilterButton({ value, onClick, speciality, level, points }) {
  return (
    <button value={value} onClick={onClick}>
      {level ? (
        <>
          {level}
          <span className='pts'>&nbsp;&#8226;&nbsp; {points} </span>{' '}
        </>
      ) : (
        <>{speciality}</>
      )}
    </button>
  );
}

const SpecialityFilterButtons = [
  { value: 'admin', speciality: 'Administradores' },
  { value: 'ventas', speciality: 'Ventas' },
  { value: 'seo', speciality: 'SEO' },
  { value: 'arquitectura', speciality: 'Arquitectura' },
  { value: 'diseño', speciality: 'Diseño' },
  { value: 'programación', speciality: 'Programación' },
  { value: 'marketing', speciality: 'Marketing' },
  { value: 'ia', speciality: 'IA' },
  { value: 'fiscalidad', speciality: 'Fiscalidad' },
];

const LevelFilterButtons = [
  { value: '1', level: 'Nvl 1', points: '0 pts' },
  { value: '2', level: 'Nvl 2', points: '5 pts' },
  { value: '3', level: 'Nvl 3', points: '20 pts' },
  { value: '4', level: 'Nvl 4', points: '65 pts' },
  { value: '5', level: 'Nvl 5', points: '155 pts' },
  { value: '6', level: 'Nvl 6', points: '515 pts' },
  { value: '7', level: 'Nvl 7', points: '2.015 pts' },
  { value: '8', level: 'Nvl 8', points: '8.015 pts' },
  { value: '9', level: 'Nvl 9', points: '33.015 pts' },
  { value: '10', level: 'Final Boss', points: '1M pts' },
];
