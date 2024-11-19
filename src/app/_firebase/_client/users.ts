/** @format */

import { doc, getDoc } from 'firebase/firestore';
import { db } from './_clientConfig';

/**
 * Get user doc with uid
 * */
export const getUserDoc = async (uid: string) => {
  try {
    const userRef = doc(db, 'users', uid);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      console.log('Datos del usuario:', userData);
      return userData;
    }

    console.log('Usuario no encontrado');
    return null;
  } catch (error) {
    console.error('Error al obtener el documento:', error);
    throw new Error('No se pudo obtener el documento');
  }
};
