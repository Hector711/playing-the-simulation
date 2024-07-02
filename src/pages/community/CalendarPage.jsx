import React from 'react';
import ModelMain from '@/layouts/ModelMain';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
dayjs.locale('es');
import { useQuery } from '@tanstack/react-query';
import { getEvents } from '../../api/eventsApi';

export default function CalendarPage() {
  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });
  const localizer = dayjsLocalizer(dayjs);
  const eventsObject = events
    ? events.map(event => {
        return {
          start: dayjs(event.start).toDate(),
          end: dayjs(event.end).toDate(),
          category: event.category,
          title: event.title,
        };
      })
    : [];
  const components = {
    event: props => {
      const eventCategory = props.event.category;
      console.log(eventCategory);
      if (eventCategory === 'Streaming') {
        return <div className='streaming'>{props.title}</div>;
      } else if (eventCategory === 'Reunión Grupal') {
        return <div className='reunion-grupal'>{props.title}</div>;
      } else if (eventCategory === 'Castillo') {
        return <div className='castillo'>{props.title}</div>;
      }
    },
  };
  return (
    <>
      <ModelMain id='calendar-page' className='community-common' title='Calendario de eventos'>
        {/* <h2>Calendario</h2> <hr /> */}
        <Calendar
          // La forma es en la que nosotros vamos a poder convertir las fechas a un formato que el calendario pueda entender
          localizer={localizer}
          events={eventsObject && eventsObject}
          className='calendar  blurr shadoww'
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
      </ModelMain>
    </>
  );
}
