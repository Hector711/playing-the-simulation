import { doc, collection, setDoc } from 'firebase/firestore';
import { db } from '@/app/_firebase/config';

export async function createUserDocWithUid(uid: string | undefined, userData: any) {
  const userRef = doc(collection(db, 'users'), uid);
  const userDoc = await setDoc(userRef, userData);
  return userDoc;
}

