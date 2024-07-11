import React from 'react';
import ModelAsideRight from '@/layouts/ModelAsideRight';
import Post from '@/components/Post';
import Newspaper from '@/icons/Newspaper';

export default function News() {
  return (
    <ModelAsideRight id='news' className='blurr' >
      <header id='header-news' className='aside-header'>
          <Newspaper />
          <h2 className='impact'>Noticias</h2>
      </header>
      <section className='aside-section'>

      </section>

    </ModelAsideRight>
  );
}

const news = [
  {
    id: 1,
    user: 'Carlos Adams',
    img: '',
    title: '',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac purus sit amet nunc.',
    date: '2021-08-10',
    typ: '!'
  },
  {
    id: 2,
    title: 'José Torres se unió a la comunidad!',
    content: 'Dale la bienvenida!',
    date: '2021-08-10',
    typ: '!!'
  },
  {
    id: 3,
    title: 'Noticiario del mes',
    content: 'El noticiario de julio ya está disponible!',
    date: '!!!',
  },
  {
    id: 4,
    title: '',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac purus sit amet nunc.',
    date: '2021-08-10',
  }
]