import React from 'react';
import Post from '@/components/Post';
import ModelAsideRight from '@/layouts/ModelAsideRight';
import { Outlet } from 'react-router-dom';

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
    <ModelAsideRight title='Noticias' id='news'>
      <section id='news'></section>
    </ModelAsideRight>
  );
}
