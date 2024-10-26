import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '@/app/firebase/config';

async function getCollection(collectionName: string) {
  const db = getFirestore(app);
  const newsCollection = collection(db, collectionName);
  return newsCollection;
}

export async function getDocuments(collectionName: string) {
  const newsCollection = await getCollection(collectionName);
  const newsSnapshot = await getDocs(newsCollection);
  const newsList = newsSnapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return newsList;
}