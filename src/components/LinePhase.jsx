import React from 'react';
import { usePlanning } from '@/context/PlanningContext';

export default function LineMonths() {
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
