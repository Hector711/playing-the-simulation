import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';
import PlaygroundCard from '@/components/PlaygroundCard';
// import Dot from '@/icons/Dot';

export default function BonusPage() {
  const arrayEntries = Object.entries(bonusPage);
  return (
    <>
      {arrayEntries.map(([category, items]) => (
        <div key={category} className='category-bonus'>
          <div className='header'>
          <h3>{category}</h3>
          <hr />
          </div>
          <div className='playground-cards-grid'>
            {items.map((item, i) => (
              <PlaygroundCard key={i} {...item} />
            ))}
          </div>
        </div>

        // <Accordion
        //   // defaultExpanded
        //   className='accordions'
        //   key={level}
        // >
        //   <AccordionSummary
        //     expandIcon={<ExpandMoreIcon className='arrow-icons' />}
        //     aria-controls='panel-1-content'
        //     id='panel-1-header'
        //   >
        //     <h3>{level.charAt(0).toUpperCase() + level.slice(1)}</h3>
        //   </AccordionSummary>
        //   <AccordionDetails className='list-container items-content'>
        //     {items.map((item, i) => (
        //       <ul key={i}>
        //         <li>
        //           <NavLink className='item-links blurr' to={`/playground/bonus/${items.item_id}`}>
        //             <h5>{item.title}</h5>
        //           </NavLink>
        //         </li>
        //       </ul>
        //     ))}
        //   </AccordionDetails>
        // </Accordion>
      ))}
    </>
  );
}

const bonusPage = {
  basic: [
    {
      title: 'Foto de perfil profesional',
      points: 5,
      description: 'Sube una foto de perfil profesional.',
      item_id: 'foto-de-perfil-profesional',
      timesCompleted: 23,
      completed: true,
      likes: 12,
      points: 5
    },
    {
      title: 'Presentación escrita',
      points: 10,
      description: 'Presentate ante la comunidad.',
      item_id: 'presentacion-escrita',
      timesCompleted: 23,
      completed: false,
      likes: 12,
      points: 5


    },
    {
      title: 'Presentación en video',
      points: 40,
      description: 'Graba un video breve hablando a cámara presentandote.',
      item_id: 'presentacion-en-video',
      timesCompleted: 23,
      completed: true,
      likes: 12,
      points: 30


    },
    {
      title: 'Completar Minimal CV',
      points: 10,
      description: 'Completa tu CV para mostrar a la comunidad tu recorrido profesional.',
      item_id: 'completar-minimal-cv',
      timesCompleted: 23,
      completed: true,
      likes: 12,
      points: 15


    },
  ],
  intermedio: [
    {
      title: 'Bonus Marronero',
      points: 10,
      description: 'Presentate ante la comunidad.',
      item_id: 'bonus-marronero',
      timesCompleted: 23,
      completed: true ,
      likes: 12,
      points: 50


    },
    {
      title: 'Auditoria personal',
      points: 10,
      description: 'Graba un video breve hablando a cámara presentandote.',
      item_id: 'auditoria-personal',
      timesCompleted: 23,
      completed: true ,
      likes: 12,
      points: 20


    },
  ],
  pro: [
    {
      title: 'Bonus de las galletas',
      points: 10,
      description: 'Presentate ante la comunidad.',
      item_id: 'bonus-de-las-galletas',
      timesCompleted: 23,
      completed: true ,
      likes: 12,
      points: 50


    },
  ],
};
