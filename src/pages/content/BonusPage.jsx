import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';
// import Dot from '@/icons/Dot';

export default function BonusPage() {
  const arrayEntries = Object.entries(bonusPage);
  return (
    <>
      {arrayEntries.map(([level, items]) => (
        <Accordion
          // defaultExpanded
          className='accordions'
          key={level}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='arrow-icons' />}
            aria-controls='panel-1-content'
            id='panel-1-header'
          >
            <h3>{level.charAt(0).toUpperCase() + level.slice(1)}</h3>
          </AccordionSummary>
          <AccordionDetails className='list-container items-content'>
            {items.map((item, i) => (
              <ul key={i}>
                <li>
                  <NavLink className='item-links blurr'>
                    <h5>{item.title}</h5>
                  </NavLink>
                </li>
              </ul>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}


const bonusPage = {
  basic: [
    {
      title: 'Foto de perfil profesional',
      points: 5,
      description: 'Graba un video breve hablando a cámara presentandote',
    },
    {
      title: 'Presentación escrita',
      points: 10,
      description: 'Presentate ante la comunidad',
    },
    {
      title: 'Presentación en video',
      points: 40,
      description: 'Graba un video breve hablando a cámara presentandote',
    },
    {
      title: 'Completar Minimal CV',
      points: 10,
      description: 'Graba un video breve hablando a cámara presentandote',
    },
  ],
  intermedio: [
    {
      title: 'Bonus Marronero',
      points: 10,
      description: 'Presentate ante la comunidad',
    },
    {
      title: 'Auditoria personal',
      points: 10,
      description: 'Graba un video breve hablando a cámara presentandote',
    },
  ],
  pro: [
    {
      title: 'Bonus de las galletas',
      points: 10,
      description: 'Presentate ante la comunidad',
    },
    
  ],
};
