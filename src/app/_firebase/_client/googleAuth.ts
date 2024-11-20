import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/app/_firebase/_client/_clientConfig';
import { getUserDoc } from './users';
import axios from 'axios';

export const logInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    GoogleAuthProvider.credentialFromResult(result);

    const user = result.user;
    const token = await user.getIdToken();

    const userDoc = await getUserDoc(user.uid);

    if (!userDoc) {
      console.log('User doc not found');
      return null;
    }
    console.log('User doc found, logging in...');
    const response = await axios.post(
      '/api/login',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const responseObject = {
      userDoc: userDoc,
      apiResponse: response,
    };

    return responseObject;
  } catch (error) {
    console.error('Error during Google sign-in:', error);
    throw error;
  }
};

export const signUpWithGoogle = async (username: string) => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    GoogleAuthProvider.credentialFromResult(result);

    const user = result.user;
    const token = await user.getIdToken();
    const uid = user.uid;

    const response = await axios.post(
      '/api/signup',
      {
        uid: uid,
        username: username,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response;
  } catch (error) {
    console.error('Error during Google sign-in:', error);
    throw error;
  }
};
