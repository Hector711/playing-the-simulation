import { doc, collection, setDoc } from 'firebase/firestore';
import { db } from '@/app/_firebase/config';

interface UserData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

export async function createUserDocWithUid(
  uid: string | undefined,
  userData: UserData,
) {
  const userRef = doc(collection(db, 'users'), uid);
  const userDoc = await setDoc(userRef, userData);
  return userDoc;
}
