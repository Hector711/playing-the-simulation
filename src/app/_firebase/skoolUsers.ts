/** @format */

import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/app/_firebase/_clientConfig';

export const getUserSkool = async (username: string) => {
  const usersRef = collection(db, 'skoolProfiles');
  const q = query(usersRef, where('username', '==', username));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userData = querySnapshot.docs.map(({ data }) => data());
    return userData;
  }

  return null;
};
