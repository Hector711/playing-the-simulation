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

// export const getUser = async () => {
//   const userId = auth.currentUser?.uid;

//   if (!userId) {
//     return null;
//   }

//   const userQuerySnapshot = await getDoc(doc(db, 'users', userId));
//   const userData = userQuerySnapshot.data();

//   if (userData) {
//     return {
//       ...userData,
//       id: userQuerySnapshot.id,
//     };
//   }
//   return null;
// };

/**
 * Get user doc from collection "user"
 * */
export const getUserDoc = async (id: string) => {
  const userSnapshot = await getDoc(doc(db, 'users', id));
  const userData = userSnapshot.data();

  if (userData) {
    console.log('Datos del usuario:', userData);
    return userData;
  }
  return null;
};

/**
 * Called from api/signup
 * */
export const createNewUserDoc = async (user: any) => {
  const userRef = doc(collection(db, 'users'), user.uid);
  const userDoc = await setDoc(userRef, user);
  return userDoc;
};

export const createUserFromSkoolData = async (skoolUser: any) => {
  const { id, firstName, lastName, email, username, avatar, bio } = skoolUser;

  const userData = {
    username,
    firstName,
    lastName,
    email,
    avatar,
    bio,
    // Puedes agregar más campos si es necesario
  };

  try {
    await createUserDocWithUid(id, userData);
    console.log('Usuario creado exitosamente en la colección users');
  } catch (error) {
    console.error('Error al crear el usuario:', error);
  }
};
