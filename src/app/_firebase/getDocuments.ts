import { getFirestore, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { app } from '@/app/_firebase/config';

async function getCollection(collectionName: string) {
  const db = getFirestore(app);
  const dataCollection = collection(db, collectionName);
  return dataCollection;
}

export async function getDocuments(collectionName: string) {
  const newsCollection = await getCollection(collectionName);
  const q = query(newsCollection, orderBy('createdAt', 'desc'));
  const newsSnapshot = await getDocs(q);
  const newsList = newsSnapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  console.log({newsList});

  return newsList;
}

export async function fetchItems() {
  const postsCollection = await getCollection('posts');
  const q = query(postsCollection, orderBy('createdAt', 'desc'), limit(10));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => doc.data());
  return data;
};


