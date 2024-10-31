/** @format */

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth, db } from '@/app/_firebase/clientConfig';
import {
  collection,
  doc,
  getCountFromServer,
  limit,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';
import axios from 'axios';

export const loginUser = async (email: string, password: string) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);

    const response = await axios.post(
      '/api/login',
      {},
      {
        headers: {
          Authorization: `Bearer ${await credentials.user.getIdToken()}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const logoutUser = async () => {
  await signOut(auth);

  await fetch('/api/logout', {
    method: 'POST',
  });


  return null;
};

export const validateDBUserExistence = async (email: string) => {
  const userCollectionRef = collection(db, 'users');
  const queryRef = query(
    userCollectionRef,
    where('email', '==', email),
    limit(1),
  );
  const querySnapshot = await getCountFromServer(queryRef);
  return querySnapshot.data().count > 0;
};

export const signUpUser = async (registerData: any) => {
  try {
    if (registerData.password !== registerData.confirmPassword) {
      throw new Error('Las contraseñas no coinciden');
    }

    const emailExists = await validateDBUserExistence(registerData.email);
    if (emailExists) {
      throw new Error('Email Invalido');
    }

    const credentials = await createUserWithEmailAndPassword(
      auth,
      registerData.email,
      registerData.password,
    );

    if (!credentials?.user) {
      throw new Error('No se pudo registrar el usuario');
    }

    const userRef = doc(db, 'users', credentials?.user?.uid);
    const { email, firstName, lastName } = registerData;

    setDoc(userRef, {
      email,
      name: firstName,
      firstName,
      lastName,
    });

    await axios.post(
      '/api/login',
      {},
      {
        headers: {
          Authorization: `Bearer ${await credentials.user.getIdToken()}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return registerData;
  } catch (error) {
    signOut(auth);
    if (error instanceof FirebaseError) {
      console.error(error);
      throw new Error('El correo ya esta en uso.');
    }
    throw error;
  }
};
