import React, { useState, useEffect, useRef } from 'react';
import Close from '@/icons/Close';
import Poll from '@/icons/Poll';
import Clip from '@/icons/Clip';
import Gif from '@/icons/Gif';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '@/api/postsApi';

import Select from 'react-select';

export default function NewPost() {
  const queryClient = useQueryClient();

  const addPostMutation = useMutation({
    // mutation se usa para hacer peticiones POST, PUT, DELETE
    mutationFn: createPost,
    // funcion que se ejecuta cuando la petición es exitosa
    onSuccess: () => {
      // hace una nueva petición a la API para actualizar los datos
      // trae los datos nuevos los compara y actualiza la cache / interfaz
      queryClient.invalidateQueries(['posts']);
    },
  });

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const post = Object.fromEntries(formData);
    addPostMutation.mutate({
      ...post,
      numLikes: 0,
      numComments: 0,
      user: 12345,
    });
  };

  const [state, setState] = useState(true);

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
      <form onSubmit={handleSubmit}>
        <label htmlFor='title' className='hidden'></label>
        <input type='text' placeholder='Tiulo' id='title' name='title' />
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
          <label htmlFor='category' className='hidden'></label>
          <Select
            options={category}
            className='selects'
            id='category'
            styles={colourStyles}
            placeholder='Categoría'
            name='category'
          />
          <label htmlFor='label' className='hidden'></label>
          <Select
            closeMenuOnSelect={false}
            defaultValue='Etiquetas'
            isMulti
            options={labels}
            styles={colourStyles}
            className='selects'
            id='label'
            placeholder='Etiquetas'
            name='label'
          />
        </div>
        <button id='send'>Enviar</button>
      </form>
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
    adjustHeight();
    textarea.addEventListener('input', adjustHeight);
    return () => textarea.removeEventListener('input', adjustHeight);
  }, []);

  return (
    <>
      <label htmlFor='description' className='hidden'></label>
      <textarea
        ref={textareaRef}
        placeholder='Descripción'
        id='description'
        name='description'
        style={{ resize: 'none', width: '100%' }}
      />
    </>
  );
}
