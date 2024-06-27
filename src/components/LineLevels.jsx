import React from 'react';
import {useCommunity} from '@/context/CommunityContext';

export default function LineLevels() {
  const { levels } = useCommunity();

  return (
    <div id='line-levels'>
      <div id='line-container'>
        <div id='line'></div>
        <div id='dots-container'>
          {levels.map(({ level, id }, i) => (
            <LevelDot key={i} level={level} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LevelDot({ level, id }) {
  return (
    <div className='individual-dots-containers' id={id}>
      <span>
        <button>{level}</button>
        <div className='dots'></div>
        <div className='hidden-dots'></div>
      </span>
    </div>
  );
}
