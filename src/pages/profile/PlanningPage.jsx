import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModelMainPro from '@/layouts/ModelMainPro';
import Edit from '@/icons/Edit.jsx';
import Edit2 from '@/icons/Edit2.jsx';

export default function PlanningPage() {
  return (
    <ModelMainPro title='Planificación' className='plan-page'>
      {/* CABECERA */}
      <header className='plan-page'>
        <h4>VISIÓN A LARGO PLAZO</h4>
        {/* <Edit /> */}
        <button id='edit'>
          <Edit2 />
        </button>

        <div id='goals-container'>
          <div className='goals'>
            <h5>Salud</h5> <p>Alcanzar los 80 kg</p>
          </div>
          <div className='goals'>
            <h5>Social</h5> <p>Conseguir 100 seguidores en YouTube</p>
          </div>
          <div className='goals'>
            <h5>Profesional</h5> <p>Ganar 5k € mensuales</p>
          </div>
        </div>
      </header>
      <hr />
      {/* RUTA ANUAL */}
      <section className='plan-page' id='anual-route'>
        <LineRoute year='2024' />
      </section>
      {/* TAREAS MENSUALES */}
      <section id='month-grid' className='plan-page'>
        <div id='tasks'>
          <div id='header-tasks'>
            <h2 className='impact orange'>Tareas de Julio</h2>
            {/* <Edit /> */}
            <button>
              <Edit2 />
            </button>
          </div>
          <dl>
            <dt>
              <input type='checkbox' />
              <span>
                <h5>Terminal la UI de PTS APP</h5>
                <dd>&#8226; Completar perfil</dd>
                <dd>&#8226; Completar Planning</dd>
                <dd>&#8226; Completar Mensajes</dd>
                <dd>&#8226; Completar Notificaciones</dd>
                <dd>&#8226; Completar Noticias</dd>
              </span>
            </dt>
            <dt>
              <input type='checkbox' />
              <span>
                <h5>Recopilar la informacion de Skool</h5>
                <dd>&#8226; Contactar con Javier</dd>
                <dd>&#8226; Crear los scripts</dd>
              </span>
            </dt>
            <dt>
              <input type='checkbox' />
              <span>
                <h5>Recibir Feedback</h5>
                <dd>&#8226; Grabar video tutorial</dd>
                <dd>&#8226; Enviarselo a 5 personas</dd>
              </span>
            </dt>
          </dl>
        </div>
        <div id='bail'>
          <h2 className='impact orange'>Fianza</h2>
          <h3 id='amount'>50€</h3>
          <h3>Limite: 1 de agosto</h3>
          <button>Presentar Informe</button>
        </div>
      </section>
    </ModelMainPro>
  );
}

function LineRoute() {
  return (
    <>
      <div id='route'>
        <div id='route-container'>
          <div id='line'></div>
          <div id='dots'>
            <div className='dot past'>
              <span>
                <button className='past'>ENE</button>
              </span>
            </div>
            <div className='dot past'>
              <span>
                <button className='past'>FEB</button>
              </span>
            </div>
            <div className='dot past'>
              <span>
                <button className='past'>MAR</button>
              </span>
            </div>
            <div className='dot past'>
              <span>
                <button className='past'>ABR</button>
              </span>
            </div>
            <div className='dot past'>
              <span>
                <button className='past'>MAY</button>
              </span>
            </div>
            <div className='dot past'>
              <span>
                <button className='past'>JUN</button>
              </span>
            </div>
            <div className='dot future'>
              <span>
                <button className='future'>JUL</button>
              </span>
            </div>
            <div className='dot future'>
              <span>
                <button className='future'>AGO</button>
              </span>
            </div>
            <div className='dot future'>
              <span>
                <button className='future'>SEP</button>
              </span>
            </div>
            <div className='dot future'>
              <span>
                <button className='future'>OCT</button>
              </span>
            </div>
            <div className='dot future'>
              <span>
                <button className='future'>NOV</button>
              </span>
            </div>
            <div className='dot future'>
              <span>
                <button className='future'>DIC</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
