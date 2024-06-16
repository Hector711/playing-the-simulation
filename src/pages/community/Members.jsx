import React from 'react';
import ModelAsideLeft from '@/layouts/ModelAsideLeft';
import { NavLink } from 'react-router-dom';
import ModelMainPro from '@/layouts/ModelMainPro';
import Work from '@/icons/Work';
import Location from '@/icons/Location';
import Select from 'react-select';
import Business from '@/icons/Business';

export default function Members(props) {
  const filter = [
    { value: 'speciality', label: 'Especialidad' },
    { value: 'level', label: 'Nivel' },
  ];
  return (
    <>
      <ModelAsideLeft id='members' className='community'>
        <h2 className='impact'>Filtrado</h2>
        <hr />
        <div id='filter'>
          <Select
            {...props}
            styles={{
              singleValue: base => ({
                ...base,
                color: 'white', // Cambia 'orange' por el color que desees
              }),
            }}
            options={filter}
            id='category'
            placeholder='Categoría'
            className='react-select-container'
            classNamePrefix='react-select'
          />
        </div>
        <hr />
        <button>Final Boss</button>
        <button>Admins</button>
        <button>Ventas</button>
        <button>SEO</button>
        <button>Arquitectura</button>
        <button>Diseño</button>
        <button>Programación</button>
        <button>Marketing</button>
        <button>IA</button>
        <button>Fiscalidad</button>
        <button>Empresario</button>
      </ModelAsideLeft>
      <ModelMainPro id='members'>
        <div id='members-grid'>
          {members
            .sort((a, b) => a.fullName.localeCompare(b.fullName))
            .map(contact => (
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
  business,
}) {
  return (
    <article kay={id} className='member'>
      <header>
        <NavLink to={url}>
          {business.length > 0 ? (
            <img src={img} alt={fullName} className='entrepeneur' />
          ) : (
            <img src={img} alt={fullName} />
          )}
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
      <section>
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
      {/* <hr /> */}
      <footer>
        <p>{about}</p>
      </footer>
    </article>
  );
}

const members = [
  {
    id: 1,
    fullName: 'Alejandro Sánchez',
    job: 'Arquitecto de Nube',
    area: 'Arquitectura',
    about: 'Experto en el diseño de soluciones escalables en la nube.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Madrid, España',
    username: 'alejandro_s',
    url: '/perfil/alejandro_s',
    points: 155,
    level: 5,
  },
  {
    id: 2,
    fullName: 'María López',
    job: 'Desarrolladora Senior',
    area: 'Programación',
    about: 'Apasionada por la creación de software innovador.',
    img: 'https://via.placeholder.com/150',
    business: ['ByteCrafters'],
    location: 'Barcelona, España',
    username: 'maria_l',
    url: '/perfil/maria_l',
    points: 515,
    level: 6,
  },
  {
    id: 3,
    fullName: 'Carlos García',
    job: 'Especialista en SEO',
    area: 'SEO',
    about:
      'Optimización de motores de búsqueda para obtener mejores resultados.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Valencia, España',
    username: 'carlos_g',
    url: '/perfil/carlos_g',
    points: 2015,
    level: 7,
  },
  {
    id: 4,
    fullName: 'Laura Fernández',
    job: 'Diseñadora UI/UX',
    area: 'Diseño',
    about:
      'Creación de interfaces intuitivas y atractivas para aplicaciones y sitios web.',
    img: 'https://via.placeholder.com/150',
    business: ['DesignLab'],
    location: 'Sevilla, España',
    username: 'laura_f',
    url: '/perfil/laura_f',
    points: 515,
    level: 6,
  },
  {
    id: 5,
    fullName: 'Javier Rodríguez',
    job: 'Consultor de Marketing Digital',
    area: 'Marketing',
    about:
      'Estrategias efectivas para mejorar la presencia online y generar leads cualificados.',
    img: 'https://via.placeholder.com/150',
    business: ['DigitalStrategia', 'MarketingGurus'],
    location: 'Madrid, España',
    username: 'javier_r',
    url: '/perfil/javier_r',
    points: 65,
    level: 4,
  },
  {
    id: 6,
    fullName: 'Ana Gutiérrez',
    job: 'Desarrolladora Frontend',
    area: 'Programación',
    about:
      'Especializada en la creación de interfaces de usuario dinámicas y responsivas.',
    img: 'https://via.placeholder.com/150',
    business: ['FrontEndGenius'],
    location: 'Barcelona, España',
    username: 'ana_g',
    url: '/perfil/ana_g',
    points: 155,
    level: 5,
  },
  {
    id: 7,
    fullName: 'Pablo Martín',
    job: 'Especialista en IA',
    area: 'IA',
    about:
      'Desarrollo de algoritmos avanzados para aplicaciones de inteligencia artificial.',
    img: 'https://via.placeholder.com/150',
    business: ['AI Solutions', 'TechBrains'],
    location: 'Valencia, España',
    username: 'pablo_m',
    url: '/perfil/pablo_m',
    points: 515,
    level: 6,
  },
  {
    id: 8,
    fullName: 'Lucía Navarro',
    job: 'Consultora Financiera',
    area: 'Fiscalidad',
    about:
      'Asesoramiento financiero para optimizar la gestión de recursos y cumplir con las normativas fiscales.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Madrid, España',
    username: 'lucia_n',
    url: '/perfil/lucia_n',
    points: 65,
    level: 4,
  },
  {
    id: 9,
    fullName: 'Marcos Ruiz',
    job: 'Empresario',
    area: 'Empresario',
    about:
      'Fundador y CEO de varias startups exitosas en el sector tecnológico.',
    img: 'https://via.placeholder.com/150',
    business: ['TechVentures'],
    location: 'Barcelona, España',
    username: 'marcos_r',
    url: '/perfil/marcos_r',
    points: 65,
    level: 4,
  },
  {
    id: 10,
    fullName: 'Sara Díaz',
    job: 'Analista de Datos',
    area: 'Analítica',
    about:
      'Extracción de información relevante para la toma de decisiones estratégicas.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Valencia, España',
    username: 'sara_d',
    url: '/perfil/sara_d',
    points: 2015,
    level: 7,
  },
  {
    id: 11,
    fullName: 'Diego Torres',
    job: 'Consultor SEO',
    area: 'SEO',
    about:
      'Especialista en optimización de motores de búsqueda para mejorar el posicionamiento web.',
    img: 'https://via.placeholder.com/150',
    business: ['SEO Masters'],
    location: 'Madrid, España',
    username: 'diego_t',
    url: '/perfil/diego_t',
    points: 65,
    level: 4,
  },
  {
    id: 12,
    fullName: 'Isabel González',
    job: 'Diseñadora Gráfica',
    area: 'Diseño',
    about:
      'Creación de identidades visuales únicas que transmiten la esencia de las marcas.',
    img: 'https://via.placeholder.com/150',
    business: ['DesignLab', 'ArtWorks', 'CreativeVisions'],
    location: 'Barcelona, España',
    username: 'isabel_g',
    url: '/perfil/isabel_g',
    points: 155,
    level: 5,
  },
  {
    id: 13,
    fullName: 'Rafael Jiménez',
    job: 'Desarrollador Backend',
    area: 'Programación',
    about:
      'Experto en el desarrollo de lógica y funcionalidades de aplicaciones desde el servidor.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Valencia, España',
    username: 'rafael_j',
    url: '/perfil/rafael_j',
    points: 155,
    level: 5,
  },
  {
    id: 14,
    fullName: 'Cristina Ramírez',
    job: 'Especialista en Marketing Digital',
    area: 'Marketing',
    about:
      'Planificación estratégica y ejecución de campañas efectivas de marketing digital.',
    img: 'https://via.placeholder.com/150',
    business: ['DigitalBoost'],
    location: 'Madrid, España',
    username: 'cristina_r',
    url: '/perfil/cristina_r',
    points: 65,
    level: 4,
  },
  {
    id: 15,
    fullName: 'Mario Vargas',
    job: 'Analista de Datos',
    area: 'Analítica',
    about:
      'Análisis profundo de datos para descubrir insights y patrones clave.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Barcelona, España',
    username: 'mario_v',
    url: '/perfil/mario_v',
    points: 515,
    level: 6,
  },
  {
    id: 16,
    fullName: 'Eva Martínez',
    job: 'Consultora Financiera',
    area: 'Fiscalidad',
    about:
      'Asesoramiento experto en gestión financiera y optimización de recursos.',
    img: 'https://via.placeholder.com/150',
    business: ['FinancePro'],
    location: 'Valencia, España',
    username: 'eva_m',
    url: '/perfil/eva_m',
    points: 2015,
    level: 7,
  },
  {
    id: 17,
    fullName: 'Hugo Sánchez',
    job: 'Empresario',
    area: 'Empresario',
    about:
      'Fundador y CEO de varias startups exitosas en el ámbito tecnológico.',
    img: 'https://via.placeholder.com/150',
    business: ['TechVisionaries', 'InnovationHub'],
    location: 'Madrid, España',
    username: 'hugo_s',
    url: '/perfil/hugo_s',
    points: 65,
    level: 4,
  },
  {
    id: 18,
    fullName: 'Natalia López',
    job: 'Especialista en SEO',
    area: 'SEO',
    about:
      'Optimización de motores de búsqueda para mejorar el posicionamiento orgánico.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Barcelona, España',
    username: 'natalia_l',
    url: '/perfil/natalia_l',
    points: 155,
    level: 5,
  },
  {
    id: 19,
    fullName: 'Roberto Flores',
    job: 'Diseñador UI/UX',
    area: 'Diseño',
    about:
      'Creación de interfaces atractivas y funcionales para diversas plataformas digitales.',
    img: 'https://via.placeholder.com/150',
    business: ['UI DesignLab', 'CreativePixels', 'Innovative Designs'],
    location: 'Valencia, España',
    username: 'roberto_f',
    url: '/perfil/roberto_f',
    points: 515,
    level: 6,
  },
  {
    id: 20,
    fullName: 'Luisa Martínez',
    job: 'Analista de Datos',
    area: 'Analítica',
    about: 'Extracción y análisis de datos para obtener insights estratégicos.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Madrid, España',
    username: 'luisa_m',
    url: '/perfil/luisa_m',
    points: 2015,
    level: 7,
  },
  {
    id: 21,
    fullName: 'Diego Martínez',
    job: 'Desarrollador Full Stack',
    area: 'Programación',
    about:
      'Especializado en el desarrollo tanto del frontend como del backend para aplicaciones web.',
    img: 'https://via.placeholder.com/150',
    business: ['FullStack Solutions'],
    location: 'Barcelona, España',
    username: 'diego_m',
    url: '/perfil/diego_m',
    points: 155,
    level: 5,
  },
  {
    id: 22,
    fullName: 'Elena Pérez',
    job: 'Estratega de Contenidos',
    area: 'Marketing',
    about:
      'Planificación y ejecución de estrategias de contenidos para mejorar la visibilidad y engagement.',
    img: 'https://via.placeholder.com/150',
    business: ['ContentMasters'],
    location: 'Madrid, España',
    username: 'elena_p',
    url: '/perfil/elena_p',
    points: 65,
    level: 4,
  },
  {
    id: 23,
    fullName: 'Pedro Ruiz',
    job: 'Consultor Financiero',
    area: 'Fiscalidad',
    about:
      'Asesoramiento experto en gestión financiera y estrategias fiscales.',
    img: 'https://via.placeholder.com/150',
    business: ['FinancialConsult'],
    location: 'Valencia, España',
    username: 'pedro_r',
    url: '/perfil/pedro_r',
    points: 515,
    level: 6,
  },
  {
    id: 24,
    fullName: 'Laura Navarro',
    job: 'Diseñadora UI/UX',
    area: 'Diseño',
    about:
      'Diseño de interfaces intuitivas y atractivas para aplicaciones móviles y web.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Barcelona, España',
    username: 'laura_n',
    url: '/perfil/laura_n',
    points: 155,
    level: 5,
  },
  {
    id: 25,
    fullName: 'Antonio García',
    job: 'Analista de Datos',
    area: 'Analítica',
    about:
      'Análisis estadístico y modelado de datos para la generación de informes estratégicos.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Madrid, España',
    username: 'antonio_g',
    url: '/perfil/antonio_g',
    points: 2015,
    level: 7,
  },
  {
    id: 26,
    fullName: 'Sofía Martínez',
    job: 'Consultora SEO',
    area: 'SEO',
    about:
      'Optimización de motores de búsqueda para mejorar el posicionamiento orgánico de sitios web.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Barcelona, España',
    username: 'sofia_m',
    url: '/perfil/sofia_m',
    points: 515,
    level: 6,
  },
  {
    id: 27,
    fullName: 'Miguel Ángel Sánchez',
    job: 'Desarrollador Backend',
    area: 'Programación',
    about:
      'Especializado en el desarrollo de la lógica y funcionalidades del backend para aplicaciones web.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Madrid, España',
    username: 'miguel_s',
    url: '/perfil/miguel_s',
    points: 155,
    level: 5,
  },
  {
    id: 28,
    fullName: 'Marina Torres',
    job: 'Diseñadora Gráfica',
    area: 'Diseño',
    about:
      'Creación de identidades visuales impactantes y adaptadas a las necesidades del cliente.',
    img: 'https://via.placeholder.com/150',
    business: ['GraphicVisions'],
    location: 'Barcelona, España',
    username: 'marina_t',
    url: '/perfil/marina_t',
    points: 155,
    level: 5,
  },
  {
    id: 29,
    fullName: 'Héctor Jiménez',
    job: 'Consultor de Marketing Digital',
    area: 'Marketing',
    about:
      'Estrategias digitales para aumentar la visibilidad y las conversiones de negocios online.',
    img: 'https://via.placeholder.com/150',
    business: ['DigitalMarketing Experts'],
    location: 'Madrid, España',
    username: 'hector_j',
    url: '/perfil/hector_j',
    points: 65,
    level: 4,
  },
  {
    id: 30,
    fullName: 'Carmen García',
    job: 'Analista de Datos',
    area: 'Analítica',
    about:
      'Análisis de datos para generar informes estratégicos y mejorar la toma de decisiones.',
    img: 'https://via.placeholder.com/150',
    business: ['Data Insights'],
    location: 'Valencia, España',
    username: 'carmen_g',
    url: '/perfil/carmen_g',
    points: 2015,
    level: 7,
  },

  {
    id: 34,
    fullName: 'Carlos',
    job: 'Diseñador UX/UI',
    area: 'Final Boss',
    about:
      'Diseño de interfaces centradas en la experiencia del usuario y la estética.',
    img: 'https://via.placeholder.com/150',
    business: [
      'Racks',
      'Racks Labs',
      'Ergonomics',
      'Playing The Simulation',
      'Disrup3',
    ],
    location: 'Andorra, Andorra',
    username: 'andres_m',
    url: '/perfil/andres_m',
    points: 515,
    level: 6,
  },
  {
    id: 35,
    fullName: 'Juan Alberto',
    job: 'Diseñador UX/UI',
    area: 'Admin',
    about:
      'Diseño de interfaces centradas en la experiencia del usuario y la estética.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Lima, Perú',
    username: 'andres_m',
    url: '/perfil/andres_m',
    points: 515,
    level: 6,
  },
  {
    id: 36,
    fullName: 'Felipe Gonzalez',
    job: 'Diseñador UX/UI',
    area: 'Admin',
    about:
      'Diseño de interfaces centradas en la experiencia del usuario y la estética.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Lima, Perú',
    username: 'andres_m',
    url: '/perfil/andres_m',
    points: 515,
    level: 6,
  },
];
