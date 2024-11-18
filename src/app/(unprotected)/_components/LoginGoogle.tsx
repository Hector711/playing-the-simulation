/** @format */

'use client';
import React from 'react';

import { useRouter } from 'next/navigation';
import googleIcon from '@/assets/google.png';
import Image from 'next/image';
import ButtonA from '@/components/ButtonA';


export default function LoginGoogle() {

  const handleGoogleSignIn = async () => {
   
    
  };

  return (
    <ButtonA onClick={handleGoogleSignIn} id='google-auth-button'>
      <Image src={googleIcon} alt='Google' width={20} height={20} />
      Inicia sesión con Google
    </ButtonA>
  );
}
