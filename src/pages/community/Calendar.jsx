import React from 'react';
import ModelMainPro from '@/layouts/ModelMainPro';
import ModelAsideLeft from '../../layouts/ModelAsideLeft';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
dayjs.locale('es');

export default function CalendarPage() {
  const localizer = dayjsLocalizer(dayjs);
  const events = [
    {
      start: dayjs('2024-6-18T12:00:00').toDate(),
      end: dayjs('2024-6-18T14:00:00').toDate(),
      title: 'Streaming',
    },
  ];
  const components = {
    event: props => {
      console.log(props);
      return <div>{props.title}</div>;
    },
  };
  return (
    <>
      <ModelAsideLeft id='calendar' title='Eventos' className='community'>
        <button>Streamings</button>
        <button>Reuniones Grupales</button>
        <button>Castillo</button>
        <button>Racks Labs</button>
        <button>Otros</button>
      </ModelAsideLeft>
      <ModelMainPro id='calendar'>
        {/* <h2>Calendario</h2>
        <hr /> */}
        <Calendar
          // La forma es en la que nosotros vamos a poder convertir las fechas a un formato que el calendario pueda entender
          localizer={localizer}
          events={events}
          className='calendar'
          // views={['month', 'week', 'day']}
          // defaultView={'month'}
          // view={'month'}
          // min={dayjs('2024-6-18T08:00:00').toDate()}
          // max={dayjs('2024-6-18T20:00:00').toDate()}
          formats={{
            dayHeaderFormat: date => {
              return dayjs(date).format('dddd DD MMMM');
            },
          }}
          components={components}
        />
      </ModelMainPro>
    </>
  );
}
