import React, { useEffect } from 'react';
import ModelMain from '@/layouts/ModelMain';
import Edit from '@/icons/Edit.jsx';
import { usePlanning } from '@/context/PlanningContext';
import LineMonths from '@/components/LineMonths';
import LineBusiness from '@/components/LineBusiness';
import Check from '@/icons/Check';

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
      <section>
       <LineBusiness /> 
       <div className='blurr text'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore illo, soluta laborum asperiores facilis assumenda nisi corrupti tempore voluptates autem ducimus aliquid reprehenderit, qui ab aut consequuntur dolor impedit.
        </p>
       </div>
      </section>
      <br />
      <hr />
      <br />
      <section className='plan-page' id='anual-route'>
        <LineMonths />
      </section>
      {
        <section className='plan-page' id='month-grid' >
          <div id='tasks' className='blurr'>
            <div id='header-tasks'>
              <h2 className='impact orange'>
                Tareas de {convertMonthName(monthToShow)}
              </h2>
              <button>
                <Edit />
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
          <div id='bail' className='blurr'>
            <h2 className='impact orange'>Fianza</h2>
            {monthBail && Object.keys(monthBail).length > 0 ? (
              <>
                <h3 id='amount'>{monthBail.quantity}</h3>
                {monthBail && monthBail.status === 'completed' ? (
                  <span className='status'>
                    <h5>
                    Fianza Completada
                    </h5>
                    <Check />
                  </span>
                ) : (
                  <>
                    <h3>Limite: 1 de agosto</h3>
                    <a
                      href='https://carlos-adams.com/sistema-de-fianzas/'
                      target='_blank'
                    >
                      Presentar Informe
                    </a>
                  </>
                )}
              </>
            ) : (
              <>
                <h3>Fianza no presentada</h3>
                <a
                  href='https://carlos-adams.com/sistema-de-fianzas/'
                  target='_blank'
                >
                  Abrir Fianza
                </a>
              </>
            )}
          </div>
        </section>
      }
    </ModelMain>
  );
}
