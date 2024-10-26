import { useState } from 'react';
import CloseIcon from '@/icons/CloseIcon';
import PollIcon from '@/icons/PollIcon';
import ClipIcon from '@/icons/ClipIcon';
import GifIcon from '@/icons/GifIcon';

export default function NewPost() {
  const [state, setState] = useState(true);

  const toggleNewPostForm = () => {
    setState(prevState => !prevState);
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
      <form >
        <label htmlFor='title' className='hidden'></label>
        <input type='text' placeholder='Tiulo' id='title' name='title' />
        <div id='options'>
          <button>
            <ClipIcon />
          </button>
          <button>
            <PollIcon />
          </button>
          <button>
            <GifIcon   />
          </button>
        </div>
        <div id='selects'>
          <label htmlFor='category' className='hidden'></label>
          
          <label htmlFor='label' className='hidden'></label>

        </div>
        <button id='send'>Enviar</button>
      </form>
    </div>
  );
}

