
import React from 'react';
import ModelMain from '@/layouts/ModelMain';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Dot from '@/icons/Dot';
import AccordionsContainer from '@/components/AccordionsContainer';

export default function CategoriesPage() {
  return (
    <ModelMain
      id='categories-page'
      className='community-common'
      title='Categorias de post'
    >
      <AccordionsContainer>
        <CategoriesList />
      </AccordionsContainer>
    </ModelMain>
  );
}

function CategoriesList() {
  return (
    <>
      {categories.map(({ title, content, description, points }, i) => (
        <Accordion
          // defaultExpanded
          key={i}
          className='accordions'
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='arrow-icons' />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            <h3>{title}</h3> <span>&#160; {description}</span>
          </AccordionSummary>
          <AccordionDetails className='list-container items-categories'>
            {content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>Puntos:</p>
            <ul className='list-items'>
              {points.map((p, i) => (
                <li key={i}>
                  <Dot />
                  <p>{p}</p>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

const categories = [
  {
    title: '🍻 Afterwork:',
    description: 'Charla informal.',
    content: ['Tendrán un aspecto mas discreto que el resto.'],
    points: ['No suma puntos.'],
  },
  {
    title: '🏆 Wins:',
    description: 'Méritos conseguidos por la comunidad.',
    content: [
      'Podrán ir asociados a un bonus, reto, o proyecto y en tal caso se llamarán Informes de ejecución.',
    ],
    points: [
      'x1 en likes y comentarios.',
      'La cantidad de puntos dependerá del bonus o reto asociado, ya que estos lo señalarán.',
    ],
  },

  {
    title: '📚 Biblioteca:',
    description: 'Valor aportado por la comunidad.',
    content: [],
    points: [
      'x2 en likes y comentarios.',
      'La cantidad de puntos dependerá del bonus o reto asociado, ya que estos lo señalarán.',
    ],
  },
  {
    title: '⚔️ Retos:',
    description: 'Propuestas de retos.',
    content: ['Todos los retos se almacenarán en el Playground.'],
    points: [
      'x1 en likes y comentarios.',
      'x2 en likes y comentarios todos los Informes de Ejecución Asociados / 🏆 Wins.',
      'Los puntos que dan los retos serán definidos por los administradores y podrá ayudarse de la comunidad.',
    ],
  },
  {
    title: '🛗 Elevator Pitch:',
    description: 'Presentación de proyectos.',
    content: ['Todos los retos se almacenarán en el Playground.'],
    points: [
      'x3 en likes y comentarios.',
      'Además en el caso excepcional de que se trate de un negocio en estado avanzado se podrá dar un paquete extra de puntos.',
    ],
  },
  {
    title: '🧠 Brainstorming:',
    description: 'Sin miedo al éxito.',
    content: [
      'Aquí podrás presentar tu idea a la comunidad.',
      'Todas la ideas se almacenarán en el Playground, donde todos tendrán la oportunidad de comentar, debatir, dar apoyo y apuntarse a cualquiera de ellas.',
      'Pasado un tiempo, o llenado las plazas necesarias se creará un grupo privado con las personas apuntadas en el proyecto para darles un espacio donde discutir sobre como ejecutar la idea.',
    ],
    points: [
      'x1 en likes y comentarios.',
      'x1 en likes y comentarios de todos los Informes de Ejecución asociados / 🏆 Wins.',
    ],
  },
];
