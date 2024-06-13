import React, { useState } from 'react';
import Close from '@/icons/Close';
import Poll from '@/icons/Poll';
import Clip from '@/icons/Clip';
import Gif from '@/icons/Gif';

import Select from 'react-select';



export default function NewPost() {
  const [state, setState] = useState(true);

  const toggleNewPostForm = () => {
    setState(prevState => !prevState);
  };

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: '#1a1e23'}),
    option: styles => ({
      ...styles,
      backgroundColor: '#1a1e23',
      ':active': { ...styles[':active'], backgroundColor: '#565656de' },
    }),
    multiValue: styles => ({ ...styles, backgroundColor: '#f6921b' }),
    multiValueLabel: styles => ({ ...styles, color: '#111822' }),
  };

  const category = [
    { value: 'win', label: '🏆 WIN' },
    { value: 'aportacion', label: '👔 Aportación' },
    { value: 'pitch', label: '🛗 Pitch Deck' },
    { value: 'afterwork', label: '🍺 Afterwork' }
  ];

  const labels = [
    { value: 'informe', label: 'Informe Ejecución' },
    { value: 'programacion', label: 'Programacion' },
    { value: 'productividad', label: 'Productividad' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'habilidades-sociales', label: 'Habilidades Sociales' },
    { value: 'finanzas', label: 'Finanzas y Fiscalidad' },
  ];

  return (
    <div id='new-post' className={state ? 'expanded' : 'collapsed'}>
      {!state ? (
        <button
          onClick={toggleNewPostForm}
          id='open'
          className={state ? 'expanded' : 'collapsed'}
        >
          Nuevo Post
        </button>
      ) : (
        <>
          <div id='header' className={state ? 'expanded' : 'collapsed'}>
            <h2>New Post</h2>
            <button onClick={toggleNewPostForm} id='close'>
              <Close />
            </button>
          </div>
          <form>
            <input type='text' placeholder='Tiulo' id='title' />
            <input type='text' placeholder='Descripción' id='description' />
            <div id='options'>
              <button>
                <Clip />
              </button>
              <button>
                <Poll />
              </button>
              <button>
                <Gif />
              </button>
            </div>
            <div id='selects'>
              <Select
                options={category}
                className='selects'
                id='category'
                styles={colourStyles}
                placeholder='Categoría'
              />
              <Select
                closeMenuOnSelect={false}
                defaultValue='Etiquetas'
                isMulti
                options={labels}
                styles={colourStyles}
                className='selects'
                id='label'
                placeholder='Etiquetas'
              />
            </div>
            <button>Send</button>
          </form>
        </>
      )}
    </div>
  );
}
