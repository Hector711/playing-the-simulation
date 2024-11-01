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
export function UsernameForm() {
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
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', data.username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach(doc => {
          const data = doc.data() as UserProfileTypes;
          setUserProfile(data);
          console.log('data -->', data);
          router.push('/signup/show-user-profile');
        });
      }
      if (querySnapshot.empty) {
        setError('username', {
          message: 'No se encontró ningún usuario con ese username.',
        });
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(findSkoolUser)} id='skool-form' className='space-y-4'>
        <p className='text-lg font-semibold'>Introduce tu username de Skool</p>

        <input
          type='text'
          placeholder='Username'
          className='w-full p-2 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500'
          {...register('username', { required: 'El username es obligatorio' })}
        />
        {errors.username && (
          <p className='text-red-500 text-sm'>{String(errors.username.message)}</p>
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
