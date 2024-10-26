import React from 'react';
import ModelRight from '@/layouts/ModelRight';
import NewspaperIcon from '@/icons/NewspaperIcon';
import Post from '@/app/(protected)/_components/Post';
import { getDocuments } from '@/app/firebase/getDocuments';
import AdminPost from './AdminPost';
import NoticiaPost from './NoticiaPost';
export default async function News() {
  const news = await getDocuments('news');

  return (
    <ModelRight id='news' className='blurr'>
      <header id='header-news' className='aside-header'>
        <NewspaperIcon />
        <h2 className='impact'>Noticias</h2>
      </header>
      <section className='news-container'>
        {news.map((item: any) => {
          if (item.type === 'noticia') {
            return (
              <NoticiaPost {...item} />
            );
          } else if (item.type === 'admin') {
            return (
              <AdminPost {...item} />
            );
          } 
        })}
      </section>
    </ModelRight>
  );
}
