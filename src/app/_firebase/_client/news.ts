/** @format */

import { getDocs, query, orderBy, limit, collection } from 'firebase/firestore';
import { db } from '@/app/_firebase/_client/_clientConfig';

export async function fetchNews() {
  const collectionRef = collection(db, 'news');
  const q = query(collectionRef, orderBy('createdAt', 'desc'), limit(10));
  const newsSnapshot = await getDocs(q);
  const newsList = newsSnapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return newsList;
}
