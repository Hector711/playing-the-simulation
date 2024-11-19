/** @format */

'use client';
import React from 'react';
import { signUpWithGoogle } from '@/app/_firebase/_client/googleAuth';
import { useRouter } from 'next/navigation';
import googleIcon from '@/assets/google.png';
import Image from 'next/image';
import ButtonA from '@/components/ButtonA';
import { useState } from 'react';

export default function SignUpGoogleButton({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const res = await signUpWithGoogle();

  };

  return (
    <ButtonA onClick={handleGoogleSignIn} id='google-auth-button'>
      <Image src={googleIcon} alt='Google' width={20} height={20} />
      {children}
    </ButtonA>
  );
}
