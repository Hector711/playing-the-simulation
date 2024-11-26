'use client';
import { fetchNews } from '@/app/_firebase/_client/news';
import NewsCard from './NewsCard';
import MiniNavbar from '@/app/(protected)/_components/MiniNavbar';
import { useEffect, useState } from 'react';
import { DocumentData } from 'firebase/firestore';

export default function News() {
  const [news, setNews] = useState<DocumentData[]>([]);
  const [section, setSection] = useState('news');
  useEffect(() => {
    async function loadData() {
      const news = await fetchNews();
      setNews(news);
    }
    loadData();
  }, []);
  const nav = [
    { title: 'Noticias', section: 'news' },
    { title: 'Anuncios', section: 'announcements' },
  ];

  return (
    <div id='news' className='flex flex-col gap-3'>
      <MiniNavbar nav={nav} />
      <section className='news-container'>
        {news.map((item: any, index: number) => {
          return <NewsCard {...item} key={index} />;
        })}
      </section>
    </div>
  );
}
