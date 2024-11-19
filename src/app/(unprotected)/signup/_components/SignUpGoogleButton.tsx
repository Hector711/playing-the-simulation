/** @format */

'use client';
import React from 'react';
import { signUpWithGoogle } from '@/app/_firebase/_client/googleAuth';
import { useRouter } from 'next/navigation';
import googleIcon from '@/assets/google.png';
import Image from 'next/image';
import ButtonA from '@/components/ButtonA';

export default function SignUpGoogleButton({ children, username }: { children: React.ReactNode, username: string }) {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const res = await signUpWithGoogle(username);

    if (res.status !== 200) {
      alert('Error al asociar tu cuenta de Google');
    }
    router.push('/');
  };

  return (
    <ButtonA onClick={handleGoogleSignIn} id='google-auth-button'>
      <Image src={googleIcon} alt='Google' width={20} height={20} />
      {children}
    </ButtonA>
  );
}
