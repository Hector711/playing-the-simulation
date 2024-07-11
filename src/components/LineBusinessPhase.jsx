import React from 'react';

export default function LineBusinessPhase() {
  return (
    <div id='route' className='blurr'>
      <div id='route-container'>
        <div id='line'></div>
        <div id='dots'>
          {businessPhases.map((item, i) => (
            <Phase
              key={i}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Phase({ phase }) {
  return (
    <div className='blurr dot'>
      <span>
        <button >
          {phase}
        </button>
      </span>
    </div>
  );
}

const businessPhases = [
  {
    phase: 'Fase 0',
    title: '',
  },
  {
    phase: 'Fase 1',
    title: 'De 0 a 1k',
  },
  {
    phase: 'Fase 2',
    title: 'De 1k a 10k',
  },
  {
    phase: 'Fase 3',
    title: 'De 10k a 100k',
  }
  
];
