import React from 'react';
import ModelAsideRight from '@/layouts/ModelAsideRight';
import Post from '@/components/Post';
import Newspaper from '@/icons/Newspaper';

export default function News() {
  return (
    <ModelAsideRight id='news' className='blurr' title='Noticias'>
      <header>
        <div>
          <Newspaper />
          <h2 className='impact'>Noticias</h2>
        </div>
      <hr />
      </header>
      <section id='news'></section>
    </ModelAsideRight>
  );
}
