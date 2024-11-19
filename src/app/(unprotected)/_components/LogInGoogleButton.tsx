/** @format */

'use client';
import React from 'react';
import { logInWithGoogle } from '@/app/_firebase/_client/googleAuth';

import { useRouter } from 'next/navigation';
import googleIcon from '@/assets/google.png';
import Image from 'next/image';
import ButtonA from '@/components/ButtonA';
import { useUserProfile } from '@/hooks/userProfileHook';
import { UserProfileTypes } from '@/types/userTypes';
export default function LogInGoogleButton() {
  const { setUserProfile } = useUserProfile();
  const router = useRouter();
  const handleGoogleLogIn = async () => {
    const result = await logInWithGoogle();
    if (result === null) {
      alert('Error en la autenticación');
      return;
    }
    const { apiResponse, userDoc } = result;
    if (userDoc === null) {
      alert('Primero debes registrarte y crear tu cuenta');
      router.push('/signup');
    }
    if (apiResponse?.status === 200) {
      console.log('user -->', userDoc);
      setUserProfile(userDoc as unknown as UserProfileTypes);
      router.push('/home');
    }
  };

  return (
    <ButtonA onClick={handleGoogleLogIn} id='google-auth-button'>
      <Image src={googleIcon} alt='Google' width={20} height={20} />
      Iniciar sesión con Google
    </ButtonA>
  );
}
