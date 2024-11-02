/** @format */

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/_firebase/_clientConfig';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import axios from 'axios';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { getUserWithID } from '@/app/_firebase/users';
import { useUserProfile } from '@/hooks/userProfileHook';
import { UserProfileTypes } from '@/types/userTypes';

export default function LoginForm() {
  const { setUserProfile } = useUserProfile();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (data: any) => {
    setIsLoading(true);
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      const userId = credentials.user.uid;
      const user = await getUserWithID(userId);
      const token = await credentials.user.getIdToken();

      if (!token) {
        throw new Error('No se ha podido obtener el token');
      }
      const res = await axios.post('/api/login', null, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!user) {
        throw new Error('No se ha podido obtener el usuario');
      }
      if (res.status === 200) {
        setUserProfile(user as UserProfileTypes);
        router.replace('/home');
      }
    } catch (error: any) {
      console.error(error);
      signOut(auth);
      alert(error.message || 'Email o contraseña incorrectos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form action='' onSubmit={handleSubmit(handleSignIn)} id='login-form'>
        <input
          type='email'
          placeholder='Email'
          {...register('email', { required: true })}
        />
        {errors.email && (
          <p className='errors'>{String(errors.email.message)}</p>
        )}
        <input
          type='password'
          placeholder='Password'
          {...register('password', {
            required: true,
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
          })}
        />
        {errors.password && (
          <p className='errors'>{String(errors.password.message)}</p>
        )}
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Cargando...' : 'Enviar'}
        </button>
      </form>
      <p className='register'>
        ¿Quieres unirte? &nbsp;
        <Link href='/signup' id='join-link'>
          Registrate aqui
        </Link>
      </p>
    </>
  );
}
