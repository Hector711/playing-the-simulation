import React, { useState } from 'react';
import ModelMainPro from '@/layouts/ModelMainPro';

export default function Goals() {
  const [goals, setGoals] = useState([]);
  const [route, setRoute] = useState('select');
  const [numGoals, setNumGoals] = useState(0);

  return (
    <ModelMainPro>
      <h2>Planificación</h2>
      <LineRoute title='Salud'/>
      <LineRoute title='Profesional'/>
      <LineRoute title='Social'/>
    </ModelMainPro>
  );
}

function LineRoute({title}) {
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


