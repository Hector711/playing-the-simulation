import { collection } from 'firebase/firestore';
import { db } from '@/app/_firebase/config';

export default async function getCollection(collectionName: string) {
  const dataCollection = collection(db, collectionName);
  return dataCollection;
}
