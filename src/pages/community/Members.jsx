import React from 'react';
import ModelAsideLeft from '@/layouts/ModelAsideLeft';
import { NavLink } from 'react-router-dom';
import ModelMainPro from '@/layouts/ModelMainPro';
import Work from '@/icons/Work';
import Location from '@/icons/Location';

const members = [
  {
    id: 1,
    fullName: 'Alice Johnson',
    job: 'Software Engineer',
    about: 'Passionate about developing scalable web applications.',
    img: 'https://via.placeholder.com/150',
    location: 'San Francisco, CA',
    username: 'alice_j',
    url: '/profile/alice_j',
    points: 50,
    level: 4,
    levelDescription: 'CryptoBro: Técnicas de Ahorro Básicas',
  },
  {
    id: 2,
    fullName: 'Bob Smith',
    job: 'Product Manager',
    about: 'Experienced in managing cross-functional teams.',
    img: 'https://via.placeholder.com/150',
    location: 'New York, NY',
    username: 'bob_smith',
    url: '/profile/bob_smith',
    points: 200,
    level: 6,
    levelDescription: 'Hustler marronero: Enciclopedia 0.19% (Legacy)',
  },
  {
    id: 3,
    fullName: 'Carlos Martínez',
    job: 'UX Designer',
    about: 'Designing user-friendly interfaces for over 5 years.',
    img: 'https://via.placeholder.com/150',
    location: 'Austin, TX',
    username: 'carlos_m',
    url: '/profile/carlos_m',
    points: 20,
    level: 3,
    levelDescription: 'Mileurista: Herramientas para dejar el mileurismo',
  },
  {
    id: 4,
    fullName: 'Diana Lee',
    job: 'Data Scientist',
    about: 'Specializes in machine learning and AI.',
    img: 'https://via.placeholder.com/150',
    location: 'Boston, MA',
    username: 'diana_lee',
    url: '/profile/diana_lee',
    points: 8_000,
    level: 8,
    levelDescription: 'Dueño de Holding: Global project.',
  },
  {
    id: 5,
    fullName: 'Ethan Brown',
    job: 'DevOps Engineer',
    about: 'Ensuring smooth deployment and operations.',
    img: 'https://via.placeholder.com/150',
    location: 'Seattle, WA',
    username: 'ethan_b',
    url: '/profile/ethan_b',
    points: 5,
    level: 2,
    levelDescription: 'Funcionario: Manual del Viajero',
  },
  {
    id: 6,
    fullName: 'Fiona Clark',
    job: 'Marketing Specialist',
    about: 'Creating impactful marketing strategies.',
    img: 'https://via.placeholder.com/150',
    location: 'Chicago, IL',
    username: 'fiona_clark',
    url: '/profile/fiona_clark',
    points: 515,
    level: 6,
    levelDescription: 'Hustler marronero: Enciclopedia 0.19% (Legacy)',
  },
  {
    id: 7,
    fullName: 'George Lewis',
    job: 'Sales Manager',
    about: 'Leading the sales team to success.',
    img: 'https://via.placeholder.com/150',
    location: 'Houston, TX',
    username: 'george_lewis',
    url: '/profile/george_lewis',
    points: 0,
    level: 1,
    levelDescription: 'NiNi: Introducción a la comunidad',
  },
  {
    id: 8,
    fullName: 'Hannah Walker',
    job: 'Graphic Designer',
    about: 'Crafting visually appealing designs.',
    img: 'https://via.placeholder.com/150',
    location: 'Los Angeles, CA',
    username: 'hannah_w',
    url: '/profile/hannah_w',
    points: 65,
    level: 4,
    levelDescription: 'CryptoBro: Técnicas de Ahorro Básicas',
  },
  {
    id: 9,
    fullName: 'Ian Wilson',
    job: 'Full Stack Developer',
    about: 'Building end-to-end web solutions.',
    img: 'https://via.placeholder.com/150',
    location: 'Denver, CO',
    username: 'ian_wilson',
    url: '/profile/ian_wilson',
    points: 2_015,
    level: 7,
    levelDescription: 'Emprendedor: Técnicas de Elusión Fiscal',
  },
  {
    id: 10,
    fullName: 'Jessica Miller',
    job: 'Content Writer',
    about: 'Creating engaging content for various platforms.',
    img: 'https://via.placeholder.com/150',
    location: 'Miami, FL',
    username: 'jessica_m',
    url: '/profile/jessica_m',
    points: 8_015,
    level: 8,
    levelDescription: 'Dueño de Holding: Global project.',
  },
  {
    id: 11,
    fullName: 'Kevin Anderson',
    job: 'QA Engineer',
    about: 'Ensuring product quality and reliability.',
    img: 'https://via.placeholder.com/150',
    location: 'Atlanta, GA',
    username: 'kevin_a',
    url: '/profile/kevin_a',
    points: 155,
    level: 5,
    levelDescription: 'CEO de bio INSTAGRAM: Instagram Packing',
  },
  {
    id: 12,
    fullName: 'Laura Jackson',
    job: 'Business Analyst',
    about: 'Analyzing business processes for optimization.',
    img: 'https://via.placeholder.com/150',
    location: 'San Diego, CA',
    username: 'laura_j',
    url: '/profile/laura_j',
    points: 3_000,
    level: 7,
    levelDescription: 'Emprendedor: Técnicas de Elusión Fiscal',
  },
  {
    id: 13,
    fullName: 'Michael Green',
    job: 'Network Engineer',
    about: 'Designing and managing network infrastructures.',
    img: 'https://via.placeholder.com/150',
    location: 'Phoenix, AZ',
    username: 'michael_g',
    url: '/profile/michael_g',
    points: 20,
    level: 3,
    levelDescription: 'Mileurista: Herramientas para dejar el mileurismo',
  },
  {
    id: 14,
    fullName: 'Natalie Edwards',
    job: 'HR Specialist',
    about: 'Fostering a positive workplace environment.',
    img: 'https://via.placeholder.com/150',
    location: 'Philadelphia, PA',
    username: 'natalie_e',
    url: '/profile/natalie_e',
    points: 1_000,
    level: 6,
    levelDescription: 'Hustler marronero: Enciclopedia 0.19% (Legacy)',
  },
  {
    id: 15,
    fullName: 'Oscar Perez',
    job: 'IT Support',
    about: 'Providing technical support and solutions.',
    img: 'https://via.placeholder.com/150',
    location: 'San Antonio, TX',
    username: 'oscar_p',
    url: '/profile/oscar_p',
    points: 0,
    level: 1,
    levelDescription: 'NiNi: Introducción a la comunidad',
  },
  {
    id: 16,
    fullName: 'Paula Roberts',
    job: 'Project Manager',
    about: 'Managing projects from conception to completion.',
    img: 'https://via.placeholder.com/150',
    location: 'Dallas, TX',
    username: 'paula_r',
    url: '/profile/paula_r',
    points: 6_000,
    level: 7,
    levelDescription: 'Emprendedor: Técnicas de Elusión Fiscal',
  },
  {
    id: 17,
    fullName: 'Quinn Davis',
    job: 'SEO Specialist',
    about: 'Improving website visibility and search rankings.',
    img: 'https://via.placeholder.com/150',
    location: 'San Jose, CA',
    username: 'quinn_d',
    url: '/profile/quinn_d',
    points: 155,
    level: 5,
    levelDescription: 'CEO de bio INSTAGRAM: Instagram Packing',
  },
  {
    id: 18,
    fullName: 'Rachel Thomas',
    job: 'Social Media Manager',
    about: 'Managing and growing social media presence.',
    img: 'https://via.placeholder.com/150',
    location: 'Jacksonville, FL',
    username: 'rachel_t',
    url: '/profile/rachel_t',
    points: 20,
    level: 3,
    levelDescription: 'Mileurista: Herramientas para dejar el mileurismo',
  },
  {
    id: 19,
    fullName: 'Steven Walker',
    job: 'Web Developer',
    about: 'Creating responsive and interactive websites.',
    img: 'https://via.placeholder.com/150',
    location: 'Fort Worth, TX',
    username: 'steven_w',
    url: '/profile/steven_w',
    points: 2_015,
    level: 7,
    levelDescription: 'Emprendedor: Técnicas de Elusión Fiscal',
  },
  {
    id: 20,
    fullName: 'Tina Brown',
    job: 'Customer Support',
    about: 'Providing excellent customer service.',
    img: 'https://via.placeholder.com/150',
    location: 'Columbus, OH',
    username: 'tina_b',
    url: '/profile/tina_b',
    points: 65,
    level: 4,
    levelDescription: 'CryptoBro: Técnicas de Ahorro Básicas',
  },
  {
    id: 21,
    fullName: 'Uma Patel',
    job: 'Mobile Developer',
    about: 'Developing user-friendly mobile applications.',
    img: 'https://via.placeholder.com/150',
    location: 'Charlotte, NC',
    username: 'uma_p',
    url: '/profile/uma_p',
    points: 8_000,
    level: 8,
    levelDescription: 'Dueño de Holding: Global project.',
  },
  {
    id: 22,
    fullName: 'Victor Kim',
    job: 'Cybersecurity Analyst',
    about: 'Protecting systems from cyber threats.',
    img: 'https://via.placeholder.com/150',
    location: 'Indianapolis, IN',
    username: 'victor_k',
    url: '/profile/victor_k',
    points: 1_500,
    level: 6,
    levelDescription: 'Hustler marronero: Enciclopedia 0.19% (Legacy)',
  },
  {
    id: 23,
    fullName: 'Wendy Chen',
    job: 'AI Researcher',
    about: 'Conducting research in artificial intelligence.',
    img: 'https://via.placeholder.com/150',
    location: 'San Francisco, CA',
    username: 'wendy_c',
    url: '/profile/wendy_c',
    points: 8_015,
    level: 8,
    levelDescription: 'Dueño de Holding: Global project.',
  },
  {
    id: 24,
    fullName: 'Xavier Lee',
    job: 'Blockchain Developer',
    about: 'Building decentralized applications on the blockchain.',
    img: 'https://via.placeholder.com/150',
    location: 'San Jose, CA',
    username: 'xavier_l',
    url: '/profile/xavier_l',
    points: 33_015,
    level: 9,
    levelDescription: 'Simulation Creator: Secret',
  },
  {
    id: 25,
    fullName: 'Yara Morgan',
    job: 'Operations Manager',
    about: 'Optimizing company operations and processes.',
    img: 'https://via.placeholder.com/150',
    location: 'Las Vegas, NV',
    username: 'yara_m',
    url: '/profile/yara_m',
    points: 515,
    level: 6,
    levelDescription: 'Hustler marronero: Enciclopedia 0.19% (Legacy)',
  },
  {
    id: 26,
    fullName: 'Zachary Turner',
    job: 'Financial Analyst',
    about: 'Analyzing financial data to inform business decisions.',
    img: 'https://via.placeholder.com/150',
    location: 'Baltimore, MD',
    username: 'zachary_t',
    url: '/profile/zachary_t',
    points: 100,
    level: 4,
    levelDescription: 'CryptoBro: Técnicas de Ahorro Básicas',
  },
  {
    id: 27,
    fullName: 'Amanda Young',
    job: 'Technical Writer',
    about: 'Creating clear and concise technical documentation.',
    img: 'https://via.placeholder.com/150',
    location: 'Milwaukee, WI',
    username: 'amanda_y',
    url: '/profile/amanda_y',
    points: 155,
    level: 5,
    levelDescription: 'CEO de bio INSTAGRAM: Instagram Packing',
  },
  {
    id: 28,
    fullName: 'Brandon Evans',
    job: 'Machine Learning Engineer',
    about: 'Developing and deploying machine learning models.',
    img: 'https://via.placeholder.com/150',
    location: 'Portland, OR',
    username: 'brandon_e',
    url: '/profile/brandon_e',
    points: 4_000,
    level: 7,
    levelDescription: 'Emprendedor: Técnicas de Elusión Fiscal',
  },
  {
    id: 29,
    fullName: 'Catherine Harris',
    job: 'Cloud Architect',
    about: 'Designing scalable cloud solutions.',
    img: 'https://via.placeholder.com/150',
    location: 'Louisville, KY',
    username: 'catherine_h',
    url: '/profile/catherine_h',
    points: 65,
    level: 4,
    levelDescription: 'CryptoBro: Técnicas de Ahorro Básicas',
  },
  {
    id: 30,
    fullName: 'David Martinez',
    job: 'System Administrator',
    about: 'Managing and maintaining IT systems.',
    img: 'https://via.placeholder.com/150',
    location: 'Oklahoma City, OK',
    username: 'david_m',
    url: '/profile/david_m',
    points: 1_500,
    level: 6,
    levelDescription: 'Hustler marronero: Enciclopedia 0.19% (Legacy)',
  },
];

export default function Members() {
  return (
    <>
      <ModelAsideLeft id='members' titlePage='Miembros'>
        <button>Final Boss</button>
        <button>Administradores</button>
        <button>Programadores</button>
        <button>Marketers</button>
        <button>Especialistas de IA</button>
        <button></button>
      </ModelAsideLeft>
      <ModelMainPro id='members'>
        <div id='members-grid'>
          {members.map(contact => (
            <MemberCard key={contact.id} {...contact} />
          ))}
        </div>
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
}) {
  return (
    <article kay={id} className='member'>
      <header>
        <NavLink to={url}>
          <img src={img} alt={fullName} />
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
      <section>
        <p>
          <Location />
          {location}
        </p>
        <p>
          <Work />
          {job}
        </p>
        <p>{about}</p>
      </section>
    </article>
  );
}
