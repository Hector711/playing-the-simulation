/** @format */

'use client';
import React from 'react';
import { logInWithGoogle } from '@/app/_firebase/_client/googleAuth';

import { useRouter } from 'next/navigation';
import googleIcon from '@/assets/google.png';
import Image from 'next/image';
import ButtonA from '@/components/ButtonA';

export default function LogInGoogleButton() {
  const router = useRouter();
  const handleGoogleLogIn = async () => {
    const response = await logInWithGoogle();
    console.log('response -->', response);
    if (response === null) {
      alert('Primero debes registrarte y crear tu cuenta');
      router.push('/signup');
    }
    if (response?.status === 200) {
      router.push('/home');
    }
  };

    return (
      <ButtonA onClick={handleGoogleLogIn} id='google-auth-button'>
        <Image src={googleIcon} alt='Google' width={20} height={20} />
        Inicia sesión con Google
      </ButtonA>
    );
  
}
