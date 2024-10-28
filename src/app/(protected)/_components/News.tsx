import ModelRight from '@/layouts/ModelRight';
import NewspaperIcon from '@/icons/NewspaperIcon';
import { fetchNews } from '@/app/_firebase/getDocuments';
import NewsCard from './NewsCard';

export default async function News() {
  const news = await fetchNews();

  return (
    <ModelRight id='news' className='blurr'>
      <header id='header-news' className='aside-header'>
        <NewspaperIcon />
        <h2 className='impact'>Noticias</h2>
      </header>
      <section className='news-container'>
        {news.map((item: any, index: number) => {
          return <NewsCard {...item} key={index} />;  
        })}
      </section>
    </ModelRight>
  );
}
