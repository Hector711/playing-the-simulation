import { getDocs, query, orderBy, limit, startAfter } from 'firebase/firestore';
import getCollection from '@/app/_firebase/getCollection';

export async function fetchNews() {
  const newsCollection = await getCollection('news');
  const q = query(newsCollection, orderBy('createdAt', 'desc'), limit(10));
  const newsSnapshot = await getDocs(q);
  const newsList = newsSnapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return newsList;
}
