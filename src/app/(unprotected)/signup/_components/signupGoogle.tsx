/** @format */

'use client';
import React from 'react';
import { loginGoogle } from '@/app/_firebase/auth';
import { useRouter } from 'next/navigation';
import googleIcon from '@/assets/google.png';
import Image from 'next/image';
import ButtonA from '@/components/ButtonA';
import { useState } from 'react';

export default function signupGoogle() {
  const [userInfo, setUserInfo] = useState<any | null>(null);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const res = await loginGoogle();
    if (typeof res === 'object') {

      return router.push('/signup');
    }

    if (res.status === 200) {
      return router.push('/home');
    }
    const resData = await res.json();
    return console.log(resData);
  };

  return (
    <ButtonA onClick={handleGoogleSignIn} id='google-auth-button'>
      <Image src={googleIcon} alt='Google' width={20} height={20} />
      Registrate con Google
    </ButtonA>
  );
}
