import React from 'react';
import Accordion from '@mui/material/Accordion';
import ModelMain from '@/layouts/ModelMain';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CategoriesPage() {
  return (
    <ModelMain
      id='categories-page'
      className='community-common'
      title='Categorias de post'
    >
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
          className='accordions'
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='icons' />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            <h3>{title}</h3> <span></span>
          </AccordionSummary>
          <AccordionDetails className='list-container'>
            {content}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
function AfterworkContent() {
  return (
    <>
      <h5>Charla Informal</h5>
      <ul className='list-items'>
        <li>&#x2023; Puntos: No suma puntos</li>
        <li>&#x2023; Tendrán un aspecto mas discreto que el resto.</li>
        <li>&#x2023; No se mostrán en la biblioteca</li>
      </ul>
    </>
  );
}
function WinsContent() {
  return (
    <>
      <h5>Sección dedicada a los méritos conseguidos por la comunidad</h5>
      <ul className='list-items'>
        <li></li>
        <li>&#x2023; Podrán ir asociados a un bonus o reto, y en tal caso se llamarán Informes de ejecución.</li>
        <li>&#x2023; Puntos: la cantidad de puntos dependerá del bonus o reto asociado, ya que estos lo señalarán.</li>
        <li>&#x2023; Puntos: x1 en likes y comentarios.</li>
      </ul>
    </>
  );
}
function BibliotecaContent() {
  return (
    <>
      <h5>Aqui se almacenarán todo el valor aportado por la comunidad</h5>
      <ul className='list-items'>
        <li>&#x2023; Puntos: x2 en likes y comentarios.</li>
      </ul>
    </>
  );
}
function RetosContent() {
  return (
    <>
      <h5>Aquí podrás proponer retos al resto de la comunidad.</h5>
      <ul className='list-items'>
        <li>&#x2023; Puntos: x1 en likes y comentarios.</li>
        <li>&#x2023; Puntos: x2 en likes y comentarios todos los Informes de Ejecución Asociados (🏆 Wins).</li>de 
        <li>&#x2023; Los puntos que dan los retos serán definidos por los administradores y podra ayudarse de la comunidad.</li>
        <li>&#x2023; Ubicación: Playground</li>

      </ul>
    </>
  );
}
function ElevatorPitchContent() {
  return (
    <>
      <h5>Aquí podrás presentar tu proyecto a la comunidad.</h5>
      <ul className='list-items'>
        <li>&#x2023; Puntos: x3 en likes y comentarios.</li>
        <li>&#x2023; Puntos: Además en el caso excepcional de que se trate de un negocio en estado avanzado se podrá dar un paquete extra de puntos.</li>
        <li>&#x2023; Ubicación: Playground</li>
      </ul>
    </>
  );
}
function BrainstormingContent() {
  return (
    <>
      <h5>Aquí tendrás un espacio donde compartir tus ideas mas locas.</h5>
      <ul className='list-items'>
      <li>&#x2023; Cualquier persona podra apuntarse a cualquier idea.</li>
      <li>&#x2023; Pasado un tiempo, o llenado las plazas necesarias se creará un grupo privado con las personas apuntadas en el proyecto para darles un espacio donde discutir sobre como ejecutar la idea.</li>
      <li>&#x2023; Puntos: x1 en likes y comentarios.</li>
      <li>&#x2023; Puntos: x2 en likes y comentarios todos los Informes de Ejecución Asociados (🏆 Wins).</li>
      <li>&#x2023; Ubicación: Playground</li>
      </ul>
    </>
  );
}

const categories = [
  {
    title: '🍻 Afterwork',
    content: <AfterworkContent />,
  },
  {
    title: '🏆 Wins',
    content: <WinsContent />,
  },
  {
    title: '📚 Biblioteca',
    content: <BibliotecaContent />,
  },
  {
    title: '⚔️ Retos',
    content: <RetosContent />,
  },
  {
    title: '🛗 Elevator Pitch (Proyectos)',
    content:
      <ElevatorPitchContent />,
  },
  {
    title: '🧠 Brainstorming',
    content:
    <BrainstormingContent />,
  },
];
