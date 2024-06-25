import React, { useEffect } from 'react';
import ModelMainPro from '@/layouts/ModelMainPro';
import Edit from '@/icons/Edit.jsx';
import Edit2 from '@/icons/Edit2.jsx';
import { usePlanning } from '@/context/PlanningContext';

export default function PlanningPage() {
  const {
    monthToShow,
    getMonthTasks,
    monthTasks,
    convertMonthName,
    getMonthBail,
    monthBail,
  } = usePlanning();

  useEffect(() => {
    console.log(monthToShow);
    getMonthTasks(12345, monthToShow);
    getMonthBail(12345, monthToShow);
  }, [monthToShow]);

  return (
    <ModelMainPro title='Planificación' className='plan-page'>
      {/* CABECERA */}
      {/* <header className='plan-page'>
        <h4>VISIÓN A LARGO PLAZO</h4>

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
      <hr /> */}
      {/* RUTA ANUAL */}
      <section className='plan-page' id='anual-route'>
        <LineRoute />
      </section>
      {/* TAREAS MENSUALES */}
      {
        <section id='month-grid' className='plan-page'>
          <div id='tasks'>
            <div id='header-tasks'>
              <h2 className='impact orange'>
                Tareas de {convertMonthName(monthToShow)}
              </h2>
              {/* <Edit /> */}
              <button>
                <Edit2 />
              </button>
            </div>
            <dl>
              {monthTasks.map(({ id, title }) => (
                <dt key={id}>
                  <input type='checkbox' />
                  <span>
                    <h5>{title}</h5>
                  </span>
                </dt>
              ))}
            </dl>
          </div>
          <div id='bail'>
            <h2 className='impact orange'>Fianza</h2>
            {monthBail && Object.keys(monthBail).length > 0  ? (
              <>
                <h3 id='amount'>{monthBail.quantity}</h3>
                <h3>Limite: 1 de agosto</h3>
                <button>Presentar Informe</button>
              </>
            ) : (
              <>
              <h3>Fianza no presentada</h3>
              <label htmlFor="">Cantidad:</label>
              <input type="text" />
              <button>Abrir Fianza</button>
              </>
            )}

            {console.log(monthBail)}

            
          </div>
        </section>
      }
    </ModelMainPro>
  );
}

function LineRoute() {
  const { setMonthToShow } = usePlanning();
  return (
    <div id='route'>
      <div id='route-container'>
        <div id='line'></div>
        <div id='dots'>
          {yearMonths.map(({ month, time }, i) => (
            <MonthDot
              key={i}
              month={month}
              time={time}
              onClick={() => {
                setMonthToShow(month);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MonthDot({ month, time, onClick }) {
  return (
    <div className={`dot ${time}`}>
      <span>
        <button className={time} onClick={onClick}>
          {month}
        </button>
      </span>
    </div>
  );
}

const yearMonths = [
  {
    month: 'ENE',
    time: 'past',
  },
  {
    month: 'FEB',
    time: 'past',
  },
  {
    month: 'MAR',
    time: 'past',
  },
  {
    month: 'ABR',
    time: 'past',
  },
  {
    month: 'MAY',
    time: 'past',
  },
  {
    month: 'JUN',
    time: 'past',
  },
  {
    month: 'JUL',
    time: 'future',
  },
  {
    month: 'AGO',
    time: 'future',
  },
  {
    month: 'SEP',
    time: 'future',
  },
  {
    month: 'OCT',
    time: 'future',
  },
  {
    month: 'NOV',
    time: 'future',
  },
  {
    month: 'DIC',
    time: 'future',
  },
];
