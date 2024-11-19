import { db } from './_adminConfig';

/**
 * Get user doc with uid
 * */
export const adminGetUserDoc = async (uid: string) => {
  try {
    const userSnapshot = await db.collection('users').doc(uid).get();
    const userData = userSnapshot.data();

    if (userData) {
      console.log(`👤 ${userData.username}`);
      return userData;
    }
    
    console.log('Usuario no encontrado');
    return null;
  } catch (error) {
    console.error('Error al obtener el documento:', error);
    throw new Error('No se pudo obtener el documento');
  }
};



interface UserData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

/**
 * Create user doc with uid
 * */
export async function adminCreateUserDoc(
  uid: string,
  userData: UserData,
) {
  try {
    const userRef = db.collection('users').doc(uid);
    await userRef.set(userData);
    return { success: true };
  } catch (error) {
    console.error('Error al establecer el documento:', error);
    throw new Error('No se pudo establecer el documento del usuario');
  }
}

/**
 * Create user doc with uid and skool user data
 * */
export const createUserFromSkoolData = async (uid: string, skoolUser: any) => {
  const { id, firstName, lastName, email, username, avatar, bio, location, role, score, miniAvatar } = skoolUser;

  const userData = {
    username,
    firstName,
    lastName,
    email,
    avatar,
    bio,
    location,
    role,
    score,
    miniAvatar,
  };

  try {
    await adminCreateUserDoc(uid, userData);
    console.log('Usuario creado exitosamente en la colección users');
  } catch (error) {
    console.error('Error al crear el usuario:', error);
  }
};
