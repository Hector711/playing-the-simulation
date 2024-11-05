/** @format */

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/app/_firebase/_clientConfig';
import { getUserDoc } from './users';

export const googleAuth = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    GoogleAuthProvider.credentialFromResult(result);

    const user = result.user;
    const token = await user.getIdToken();

    const userDoc = await getUserDoc(user.uid);
    if (!userDoc) {
      console.log('No user doc found, creating new user...');
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          uid: user.uid,
          email: user.email,
        }),
      });
      return res;
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
