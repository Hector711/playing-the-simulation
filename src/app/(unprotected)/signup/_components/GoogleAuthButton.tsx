/** @format */

'use client';
import React from 'react';
import { googleAuth } from '@/app/_firebase/auth';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  
  const handleGoogleSignIn = async () => {
    const res = await googleAuth();
    if (res.status === 200) {
      return router.push('/home');
    }
    const resData = await res.json();
    return console.log(resData);
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Iniciar sesión con Google</button>
    </div>
  );
}
