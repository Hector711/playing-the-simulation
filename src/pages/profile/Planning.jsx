import React, { useState } from 'react';
import ModelMainPro from '@/layouts/ModelMainPro';
import { DndContext } from '@dnd-kit/core';
import Droppable from '@/components/dnd-kit/Droppable';
import Draggable from '@/components/dnd-kit/Draggable';

export default function Planning() {
  const [goals, setGoals] = useState([]);
  const [route, setRoute] = useState('select');
  const [numGoals, setNumGoals] = useState(0);


  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id='draggable' className='draggable'>
      ARRASTRA ESTO
    </Draggable>
  );


  return (
    <ModelMainPro title='Planificación'>

      <LineRoute title='Salud' />
      <LineRoute title='Profesional' />
      <LineRoute title='Social' />
      <DndContext onDragEnd={handleDragEnd}>
          <div className='draggable'>
            {parent === null ? draggableMarkup : null}
            HOLA
          </div>

          {containers.map(id => (
            // Actualizamos el componente Droppable para que acepte un prop `id`
            // y lo pase a `useDroppable`
            <Droppable key={id} id={id}>
              {parent === id ? draggableMarkup : 'SUELTALO AQUI'}
            </Droppable>
          ))}
          <hr className='w-[100%] h-[100px]' />
          <Droppable> CIRCULO</Droppable>
          <hr className='w-[100%] h-[100px]' />
          <Droppable> CUADRADO</Droppable>
        </DndContext>

    </ModelMainPro>
  );
  function handleDragEnd(event) {
    const { over } = event;

    // Si el elemento se suelta sobre un contenedor, se establece como el padre
    // de lo contrario, restablece el padre a `null`
    setParent(over ? over.id : null);
  }
}

function LineRoute({ title }) {
  return (
    <>
      <h3>{title}</h3>
      <div id='route'>
        <div id='route-container'>
          <div id='line'></div>
          <div id='dots'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
        </div>
      </div>
    </>
  );
}
