/** @format */

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/app/_firebase/_client/_clientConfig';
import { getUserDoc } from './users';

export const loginGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    GoogleAuthProvider.credentialFromResult(result);

    const user = result.user;
    console.log('user -->', user);
    const token = await user.getIdToken();
    const email = user.email;
    const uid = user.uid;

    const userDoc = await getUserDoc(user.uid);

    if (!userDoc) {
      return { uid, email };
    }
    // console.log('User doc found, logging in...');
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error('Error during Google sign-in:', error);
    throw error;
  }
};


export const signupGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    GoogleAuthProvider.credentialFromResult(result);

    const user = result.user;
    console.log('user -->', user);
    const token = await user.getIdToken();
    const email = user.email;
    const uid = user.uid;

    const userDoc = await getUserDoc(user.uid);

    if (!userDoc) {
      return { uid, email };
    }
    // console.log('User doc found, logging in...');
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error('Error during Google sign-in:', error);
    throw error;
  }
};