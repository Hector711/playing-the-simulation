import React, { useState, useEffect, useRef } from 'react';
import Close from '@/icons/Close';
import Poll from '@/icons/Poll';
import Clip from '@/icons/Clip';
import Gif from '@/icons/Gif';

import Select from 'react-select';

export default function NewPost() {
  const [state, setState] = useState(false);

  const toggleNewPostForm = () => {
    setState(prevState => !prevState);
  };

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

  const category = [
    { value: 'win', label: '🏆 WIN' },
    { value: 'biblioteca', label: '👔 Biblioteca' },
    { value: 'pitch', label: '🛗 Pitch Deck' },
    { value: 'afterwork', label: '🍺 Afterwork' },
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
    <div id='new-post'>
      {!state ? (
        <button onClick={toggleNewPostForm} id='open'>
          <h2 className='impact'>Nuevo Post</h2>
        </button>
      ) : (
        <>
          <div id='header'>
            <h2 className='impact'>Nuevo Post</h2>
            <button onClick={toggleNewPostForm} id='close'>
              <Close />
            </button>
          </div>
          <form>
            <input type='text' placeholder='Tiulo' id='title' />
            <Textarea />
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
            <button id='send'>Enviar</button>
          </form>
        </>
      )}
    </div>
  );
}

function Textarea() {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    const adjustHeight = () => {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    };
    // Ajustar la altura inicialmente en caso de que haya un valor predeterminado
    adjustHeight();
    // Ajustar la altura cada vez que el usuario escribe
    textarea.addEventListener('input', adjustHeight);
    // Limpiar el event listener cuando el componente se desmonte
    return () => textarea.removeEventListener('input', adjustHeight);
  }, []);

  return (
    <textarea
      ref={textareaRef}
      placeholder='Descripción'
      id='description'
      style={{ resize: 'none', width: '100%' }}
    />
  );
}
