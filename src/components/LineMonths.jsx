import React from 'react';
import { usePlanning } from '@/context/PlanningContext';

export default function LineMonths() {
  const { setMonthToShow } = usePlanning();
  return (
    <div id='route' className='blurr'>
      <div id='route-container' >
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
    <span>
      <button className={time} onClick={onClick}>
        <h3>{month}</h3>
      </button>
    </span>
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
