import NewspaperIcon from '@/icons/NewspaperIcon';
import { fetchNews } from '@/app/_firebase/_client/news';
import NewsCard from './NewsCard';

export default async function News() {
  const news = await fetchNews();

  return (
    <>
      <header id='header-news' className='aside-header blurr'>
        <NewspaperIcon />
        <h2 className='impact'>Noticias</h2>
      </header>
      <section className='news-container'>
        {news.map((item: any, index: number) => {
          return <NewsCard {...item} key={index} />;
        })}
      </section>
    </>
  );
}
