import React, { useEffect } from 'react';
import ModelAsideLeft from '@/layouts/ModelAsideLeft';
import ModelMain from '@/layouts/ModelMain';
import MembersGrid from '@/components/MembersGrid';
import Select from 'react-select';
import { useMembers } from '@/context/MembersContext';

export default function MembersPage() {
  const {
    selectFilter,
    onSelectFilter,
    onFilterBySector,
    onFilterByLevel,
    filter,
  } = useMembers();
  useEffect(() => {}, [selectFilter, filter]);

  return (
    <>
      <ModelAsideLeft id='members-page' className='blurr' title='Filtro'>
        <div className='select-filter'>
          <Select
            styles={colourStyles}
            options={optionsFilter}
            id='category'
            placeholder='Tipo de Filtro'
            className='react-select-container'
            classNamePrefix='react-select'
            onChange={onSelectFilter}
          />
        </div>
        <hr />
        <div className='filter-buttons'>
          {selectFilter == 'level' ? (
            <>
              {levelFilterButtons.map(({ value, level, points }, index) => (
                <FilterButton
                  key={index}
                  value={value}
                  onClick={() => onFilterByLevel(value)}
                  level={level}
                  points={points}
                />
              ))}
            </>
          ) : (
            <>
              {areaFilterButtons.map(({ value, area }, index) => (
                <FilterButton
                  key={index}
                  value={value}
                  onClick={() => onFilterBySector(value)}
                  speciality={area}
                />
              ))}
            </>
          )}
        </div>
      </ModelAsideLeft>
      <ModelMain id='members-page' title='Miembros de la comunidad' className='pro'>
        <MembersGrid />
      </ModelMain>
    </>
  );
}

function FilterButton({ value, onClick, speciality, level, points }) {
  return (
    <button value={value} onClick={onClick} >
      {level ? (
        <>
          {level}
          <span className='pts'>&nbsp;&#8226;&nbsp; {points} </span>
        </>
      ) : (
        <>{speciality}</>
      )}
    </button>
  );
}

const areaFilterButtons = [
  { value: 'Administrador', area: 'Administradores' },
  { value: 'Ventas', area: 'Ventas' },
  { value: 'SEO', area: 'SEO' },
  { value: 'Arquitectura', area: 'Arquitectura' },
  { value: 'Diseño', area: 'Diseño' },
  { value: 'Programación', area: 'Programación' },
  { value: 'Marketing', area: 'Marketing' },
  { value: 'IA', area: 'IA' },
  { value: 'Fiscalidad', area: 'Fiscalidad' },
];

const levelFilterButtons = [
  { value: 1, level: 'Nvl 1', points: '0 pts' },
  { value: 2, level: 'Nvl 2', points: '5 pts' },
  { value: 3, level: 'Nvl 3', points: '20 pts' },
  { value: 4, level: 'Nvl 4', points: '65 pts' },
  { value: 5, level: 'Nvl 5', points: '155 pts' },
  { value: 6, level: 'Nvl 6', points: '515 pts' },
  { value: 7, level: 'Nvl 7', points: '2.015 pts' },
  { value: 8, level: 'Nvl 8', points: '8.015 pts' },
  { value: 9, level: 'Nvl 9', points: '33.015 pts' },
  { value: 10, level: 'Final Boss', points: '1M pts' },
];

const optionsFilter = [
  { value: 'area', label: 'Area' },
  { value: 'level', label: 'Nivel' },
];

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: '#1a1e23' }),
  option: styles => ({
    ...styles,
    backgroundColor: '#1a1e23',
    ':active': { ...styles[':active'], backgroundColor: '#565656de' },
  }),
  multiValue: styles => ({ ...styles, backgroundColor: '#f6921b' }),
  multiValueLabel: styles => ({ ...styles, color: '#111822' }),
};

