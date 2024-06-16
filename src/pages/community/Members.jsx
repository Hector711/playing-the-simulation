import React, { useState, useEffect } from 'react';
import ModelAsideLeft from '@/layouts/ModelAsideLeft';
import { NavLink } from 'react-router-dom';
import ModelMainPro from '@/layouts/ModelMainPro';
import Work from '@/icons/Work';
import Location from '@/icons/Location';
import Select from 'react-select';
import Business from '@/icons/Business';

export default function Members(props) {
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
      setAllMembers(false)
    } else if (typeof filter === 'string') {
      setLevelFilterShow(false);
      setSpecialityFilterShow(true);
      setAllMembers(false)
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
                color: 'white',
              }),
            }}
            options={selectFilter}
            id='category'
            placeholder='Categoría'
            className='react-select-container'
            classNamePrefix='react-select'
            value={selectedValue}
            onChange={handleSelectChange}
          />
        </div>
        <hr />
        <div className='filter-buttons'>
          {toggleShow ? (
            <>
              <button value='1' onClick={handleLevelFilterChange}>
                Nivel 1
              </button>
              <button value='2' onClick={handleLevelFilterChange}>
                Nivel 2
              </button>
              <button value='3' onClick={handleLevelFilterChange}>
                Nivel 3
              </button>
              <button value='4' onClick={handleLevelFilterChange}>
                Nivel 4
              </button>
              <button value='5' onClick={handleLevelFilterChange}>
                Nivel 5
              </button>
              <button value='6' onClick={handleLevelFilterChange}>
                Nivel 6
              </button>
              <button value='7' onClick={handleLevelFilterChange}>
                Nivel 7
              </button>
              <button value='8' onClick={handleLevelFilterChange}>
                Nivel 8
              </button>
              <button value='9' onClick={handleLevelFilterChange}>
                Nivel 9
              </button>
              <button value='10' onClick={handleLevelFilterChange}>
                Nivel 10: Final Boss
              </button>
              
            </>
          ) : (
            <>
              <button value='Admin' onClick={handleSpecialityFilterChange}>
                Administradores
              </button>
              <button value='Ventas' onClick={handleSpecialityFilterChange}>
                Ventas
              </button>
              <button value='SEO' onClick={handleSpecialityFilterChange}>
                SEO
              </button>
              <button
                value='Arquitectura'
                onClick={handleSpecialityFilterChange}
              >
                Arquitectura
              </button>
              <button value='Diseño' onClick={handleSpecialityFilterChange}>
                Diseño
              </button>
              <button
                value='Programación'
                onClick={handleSpecialityFilterChange}
              >
                Programación
              </button>
              <button value='Marketing' onClick={handleSpecialityFilterChange}>
                Marketing
              </button>
              <button value='IA' onClick={handleSpecialityFilterChange}>
                IA
              </button>
              <button value='Fiscalidad' onClick={handleSpecialityFilterChange}>
                Fiscalidad
              </button>
            </>
          )}
        </div>
      </ModelAsideLeft>
      <ModelMainPro id='members'>
        <h3 className='section-page'>Todos los miembros</h3>
        <hr />
        <div id='members-grid'>
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
    job: 'Seller ',
    area: 'Ventas',
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
    job: 'Closer de ventas',
    area: 'Ventas',
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
    fullName: 'Héctor Guerra',
    job: 'Desarrollador Frontend',
    area: 'Programación',
    about:
      'Análisis estadístico y modelado de datos para la generación de informes estratégicos.',
    img: 'https://via.placeholder.com/150',
    business: [],
    location: 'Madrid, España',
    username: 'hector-guerra',
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
    fullName: 'Carlos Adams',
    job: 'Diseñador',
    area: 'Admin',
    about:
      'Diseño de interfaces centradas en la experiencia del usuario y la estética.',
    img: 'https://via.placeholder.com/150',
    business: [
      'Racks',
      'Racks Labs',
      'Ergonomics',
      'Playing The Simulation',
      'DISRUP3',
    ],
    location: 'Andorra, Andorra',
    username: 'carlos-adams',
    url: '/perfil/andres_m',
    points: 515,
    level: 10,
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
