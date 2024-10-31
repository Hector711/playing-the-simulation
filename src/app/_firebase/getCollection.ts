import { collection } from 'firebase/firestore';
import { db } from '@/app/_firebase/clientConfig';

export default async function getCollection(collectionName: string) {
  const dataCollection = collection(db, collectionName);
  return dataCollection;
}
