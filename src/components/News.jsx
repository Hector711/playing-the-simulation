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
      <section id='news'></section>
    </ModelAsideRight>
  );
}
