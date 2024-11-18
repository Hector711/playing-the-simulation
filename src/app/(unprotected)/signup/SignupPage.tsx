/** @format */

'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/app/_firebase/_clientConfig';
import { useUserProfile } from '@/hooks/userProfileHook';
import { UserProfileTypes } from '@/types/userTypes';
import { useRouter } from 'next/navigation';

// @hector-luengo-guerra-1936
export default function SignupPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { setUserProfile } = useUserProfile();

  const findSkoolUser = async (data: any) => {
    setIsLoading(true);
    try {
      // console.log('No user doc found, creating new user...');
      // const res = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${token}`,
      //   },
      //   body: JSON.stringify({
      //     uid: user.uid,
      //     email: user.email,
      //   }),
      // });
      // return res;
      
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(findSkoolUser)}
        id='skool-form'
        className='space-y-4'
      >
        <p className='text-lg font-semibold'>Introduce tu username de Skool</p>

        <input
          type='text'
          placeholder='Username'
          className='w-full p-2 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500'
          {...register('username', { required: 'El username es obligatorio' })}
        />
        {errors.username && (
          <p className='text-red-500 text-sm'>
            {String(errors.username.message)}
          </p>
        )}

        <button
          type='submit'
          className='w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300'
        >
          {isLoading ? <p>Cargando...</p> : 'Continuar'}
        </button>
      </form>
    </>
  );
}
