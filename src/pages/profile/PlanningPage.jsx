import React, { useEffect } from 'react';
import ModelMain from '@/layouts/ModelMain';
import Edit from '@/icons/Edit.jsx';
import Edit2 from '@/icons/Edit2.jsx';
import { usePlanning } from '@/context/PlanningContext';
import LineMonths from '@/components/LineMonths';

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
    <ModelMain title='Planificación' className='plan-page pro'>
      <header></header>
      <section className='plan-page' id='anual-route'>
        <LineMonths />
      </section>
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
            {monthBail && Object.keys(monthBail).length > 0 ? (
              <>
                <h3 id='amount'>{monthBail.quantity}</h3>
                <h3>Limite: 1 de agosto</h3>
                <button>Presentar Informe</button>
              </>
            ) : (
              <>
                <h3>Fianza no presentada</h3>
                <label htmlFor=''>Cantidad:</label>
                <input type='text' />
                <button>Abrir Fianza</button>
              </>
            )}
          </div>
        </section>
      }
    </ModelMain>
  );
}
