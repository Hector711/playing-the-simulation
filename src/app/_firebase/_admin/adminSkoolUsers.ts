/** @format */

import { db } from './_adminConfig';


/**
 * Obtiene los datos de un usuario de la colección 'skoolProfiles'
 * @param {string} username - El nombre de usuario que se utilizará para buscar en la colección.
 * @returns {Promise<Object | null>} - Devuelve un objeto que representa los datos del usuario si se encuentra, o null si no se encuentra ningún usuario.
 */
export const getUserSkool = async (username: string) => {
  const usersRef = db.collection('skoolProfiles'); 
  const q = usersRef.where('username', '==', username);
  const querySnapshot = await q.get();
  if (!querySnapshot.empty) {
    const userData = querySnapshot.docs[0].data();
    return userData;
  }

  console.log('No se encontró el usuario en la base de datos de Skool');
  return null;
};



