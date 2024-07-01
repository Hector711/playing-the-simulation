import React from 'react';
import Accordion from '@mui/material/Accordion';
import ModelMain from '@/layouts/ModelMain';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CategoriesPage() {
  return (
    <ModelMain id='community'>
      <CategoriesList />
    </ModelMain>
  );
}

function CategoriesList() {
  return (
    <>
      {categories.map(({ title, content }, i) => (
        <Accordion
          // defaultExpanded
          key={i}
          color='primary'
          sx={{
            boxShadow: 'none',
            textTransform: 'none',
            padding: 0,
            backgroundColor: '#141921',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            <h4>{title}</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>{content}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

const categories = [
  {
    title: 'Afterwork',
    content: 'Charla informal. Cada like o comentario suma 1 punto.',
  },
  {
    title: 'Wins',
    content:
      'Sección dedicada a los meritos, logros, informes de ejecución y demás historias de exitos. Aportará puntos extras. ',
  },
  {
    title: 'Biblioteca',
    content:
      'Todos los aportes de valor a la comunidad. Aportará puntos extras.',
  },
  {
    title: 'Retos',
    content:
      'Aquí todos pueden publicar sus retos ademas de los retos oficiales de la comunidad.',
  },
  {
    title: 'Elevator Pitch (Proyectos)',
    content:
      'Publica un elevator pitch de tu proyecto y presenta a la comunidad.',
  },
  {
    title: 'Brainstorming',
    content: 'Publica tus ideas y recibe feedback de la comunidad.',
  },
];
