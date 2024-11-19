/** @format */

import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/app/_firebase/_client/_clientConfig';

/**
 * Obtiene los datos de un usuario de la colección 'skoolProfiles'
 * @param {string} username - El nombre de usuario que se utilizará para buscar en la colección.
 * @returns {Promise<Object | null>} - Devuelve un objeto que representa los datos del usuario si se encuentra, o null si no se encuentra ningún usuario.
 */
export const getUserSkool = async (username: string) => {
  const usersRef = collection(db, 'skoolProfiles');
  const q = query(usersRef, where('username', '==', username));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userData = querySnapshot.docs[0].data();
    console.log('userData -->', userData);
    return userData;
  }

  console.log('No se encontró el usuario en la base de datos de Skool');
  return null;
};
