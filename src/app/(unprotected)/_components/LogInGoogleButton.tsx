'use client';
import React from 'react';
import { logInWithGoogle } from '@/app/_firebase/_client/googleAuth';

import { useRouter } from 'next/navigation';
import googleIcon from '@/assets/google.png';
import Image from 'next/image';
import Button from '@/components/Button';
import { useUserProfile } from '@/hooks/userProfileHook';
import { UserProfileTypes } from '@/types/userTypes';
import { useState } from 'react';

export default function LogInGoogleButton() {
  const { setUserProfile } = useUserProfile();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleGoogleLogIn = async () => {
    setIsLoading(true);
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
    <Button
      onClick={handleGoogleLogIn}
      id='google-auth-button'
      className='flex items-center gap-2'
    >
      <Image src={googleIcon} alt='Google' width={20} height={20} />
      {isLoading ? <p>Cargando...</p> : 'Iniciar sesión con Google'}
    </Button>
  );
}
