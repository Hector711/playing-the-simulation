/** @format */

import { doc, collection, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/app/_firebase/_clientConfig';

interface UserData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}
// SIGN UP: CREATING A USER DOCUMENT
export async function createUserDocWithUid(
  uid: string | undefined,
  userData: UserData,
) {
  const userRef = doc(collection(db, 'users'), uid);
  const userDoc = await setDoc(userRef, userData);
  return userDoc;
}

export const getUser = async () => {
  // await auth.authStateReady();
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

// LLamamos esta funcion desde el middleware para obtener el usuario a partir de la cookie
export const getUserWithID = async (id: string) => {
  const userSnapshot = await getDoc(doc(db, 'users', id));
  const userData = userSnapshot.data();
  if (userData) {
    console.log('Datos del usuario:', userData);
    return {
      ...userData,
      id: userSnapshot.id,
    };
  }
  return null;
};
