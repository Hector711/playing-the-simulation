import React from 'react';
import Post from '@/components/Post';
import ModelAsideRight from '@/layouts/ModelAsideRight';
import { Outlet } from 'react-router-dom';
import Newspaper from '@/icons/Newspaper';

export default function RightHomeLayout() {
  return (
    <>
      <Outlet />
      <AsideRight />
    </>
  );
}

function AsideRight() {
  return (
    <ModelAsideRight id='news'>
      <header>
      <Newspaper /><h2 className='impact'>Noticias</h2>
      </header>
      <hr />
      <section id='news'></section>
    </ModelAsideRight>
  );
}
