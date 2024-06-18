import React, { useState, useEffect } from 'react';
import ModelMainPro from '@/layouts/ModelMainPro';
import ModelAsideLeft from '@/layouts/ModelAsideLeft';
import Select from 'react-select';





export default function Archives(props) {
  const [selectedValue, setSelectedValue] = useState(null);
  const [filter, setFilter] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const handleSelectChange = option => {
    setSelectedValue(option.value);
  };

  const handleSubjectFilterChange = event => {
    const valueFilter = event.target.value;
    setFilter(valueFilter);
  };
  // Filtrar
  useEffect(() => {
    if (1 == 2) {
      setAllPosts(false);
    } else {
      setAllPosts(true);
    }
  }, [filter]);
  const selectFilter = [
    { value: 'category', label: 'Categoría' },
    { value: 'subject', label: 'Tema' },
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

  return (
    <>
      <ModelAsideLeft id='classroom' title='Filtro' className='community'>
      <div className='select-filter'>
          <Select
            {...props}
            options={selectFilter}
            id='category'
            placeholder='Categoría'
            className='react-select-container'
            classNamePrefix='react-select'
            onChange={handleSelectChange}
            styles={colourStyles}
          />
        </div>
        <hr />
        <div className='filter-buttons'>
          
          <button value='Ventas' onClick={handleSubjectFilterChange}>
            Ventas
          </button>
          <button value='SEO' onClick={handleSubjectFilterChange}>
            SEO
          </button>
          <button value='Arquitectura' onClick={handleSubjectFilterChange}>
            Arquitectura
          </button>
          <button value='Diseño' onClick={handleSubjectFilterChange}>
            Diseño
          </button>
          <button value='Programación' onClick={handleSubjectFilterChange}>
            Programación
          </button>
          <button value='Marketing' onClick={handleSubjectFilterChange}>
            Marketing
          </button>
          <button value='IA' onClick={handleSubjectFilterChange}>
            IA
          </button>
          <button value='Fiscalidad' onClick={handleSubjectFilterChange}>
            Fiscalidad
          </button>
        </div>
      </ModelAsideLeft>
      <ModelMainPro title='Publicaciones de la comunidad'>

      </ModelMainPro>
    </>
  );
}






