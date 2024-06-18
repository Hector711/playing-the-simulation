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
    <ModelAsideRight>
      <header>
        <h2 id='news' className='impact'>
          Noticias
        </h2>
        <hr />
      </header>
      <section id='news'>
        <Post
          user='Carlos Adams'
          size='news'
          title='Nuevo contenido Disponible'
          description='Buenas tardes chicos, ya tenéis nuevo contenido subido a la plataforma. Esta vez os entrego 👉 Leccionable 2 ¡Espero que lo disfrutéis!'
        />
        <Post
          user='Carlos Adams'
          size='news'
          title='Nuevo contenido Disponible'
          description='Buenas tardes chicos, ya tenéis nuevo contenido subido a la plataforma. Esta vez os entrego 👉 Leccionable 2 ¡Espero que lo disfrutéis!'
        />
        <Post
          user='Carlos Adams'
          size='news'
          title='Nuevo contenido Disponible'
          description='Buenas tardes chicos, ya tenéis nuevo contenido subido a la plataforma. Esta vez os entrego 👉 Leccionable 2 ¡Espero que lo disfrutéis!'
        />
        <Post
          user='Carlos Adams'
          size='news'
          title='Nuevo contenido Disponible'
          description='Buenas tardes chicos, ya tenéis nuevo contenido subido a la plataforma. Esta vez os entrego 👉 Leccionable 2 ¡Espero que lo disfrutéis!'
        />
        <Post
          user='Carlos Adams'
          size='news'
          title='Nuevo contenido Disponible'
          description='Buenas tardes chicos, ya tenéis nuevo contenido subido a la plataforma. Esta vez os entrego 👉 Leccionable 2 ¡Espero que lo disfrutéis!'
        />
        <Post
          user='Carlos Adams'
          size='news'
          title='Nuevo contenido Disponible'
          description='Buenas tardes chicos, ya tenéis nuevo contenido subido a la plataforma. Esta vez os entrego 👉 Leccionable 2 ¡Espero que lo disfrutéis!'
        />
        <Post
          user='Carlos Adams'
          size='news'
          title='Nuevo contenido Disponible'
          description='Buenas tardes chicos, ya tenéis nuevo contenido subido a la plataforma. Esta vez os entrego 👉 Leccionable 2 ¡Espero que lo disfrutéis!'
        />
        <Post
          user='Carlos Adams'
          size='news'
          title='Nuevo contenido Disponible'
          description='Buenas tardes chicos, ya tenéis nuevo contenido subido a la plataforma. Esta vez os entrego 👉 Leccionable 2 ¡Espero que lo disfrutéis!'
        />
        <Post
          user='Carlos Adams'
          size='news'
          title='Nuevo contenido Disponible'
          description='Buenas tardes chicos, ya tenéis nuevo contenido subido a la plataforma. Esta vez os entrego 👉 Leccionable 2 ¡Espero que lo disfrutéis!'
        />
      </section>
    </ModelAsideRight>
  );
}
