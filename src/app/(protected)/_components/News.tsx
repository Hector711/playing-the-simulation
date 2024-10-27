import ModelRight from '@/layouts/ModelRight';
import NewspaperIcon from '@/icons/NewspaperIcon';
import { getDocuments } from '@/app/_firebase/getDocuments';
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
        {news.map((item: any, index: number) => {
          if (item.type === 'Noticia') {
            return (
              <NoticiaPost {...item} key={index} />
            );
          } else if (item.type === 'Admin') {
            return (
              <AdminPost {...item} key={index} />
            );
          } 
        })}
      </section>
    </ModelRight>
  );
}
