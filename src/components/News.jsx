import React from 'react';
import ModelAsideRight from '@/layouts/ModelAsideRight';
import Post from '@/components/Post';
import Newspaper from '@/icons/Newspaper';
import { usePosts } from '@/context/PostsContext';

export default function News() {
  return (
    <ModelAsideRight id='news'>
      <header>
        <Newspaper />
        <h2 className='impact'>Noticias</h2>
      </header>
      <hr />
      <section id='news'></section>
    </ModelAsideRight>
  );
}
