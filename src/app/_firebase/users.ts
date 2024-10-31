/** @format */

import { doc, collection, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/app/_firebase/clientConfig';

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

export const getUser = async () => {
  await auth.authStateReady();
  const userId = auth.currentUser?.uid;

  if (!userId) {
    return null;
  }

  const userQuerySnapshot = await getDoc(doc(db, 'users', userId));
  const userData = userQuerySnapshot.data();

  if (userData) {
    return {
      ...userData,
      id: userQuerySnapshot.id,
    };
  }

  return null;
};
