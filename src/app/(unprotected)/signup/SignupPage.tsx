/** @format */

'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useUserProfile } from '@/hooks/userProfileHook';

import { getUserSkool } from '@/app/_firebase/_client/skoolProfiles';
import { UserProfileTypes } from '@/types/userTypes';
import { ShowSkoolProfile } from '@/app/(unprotected)/signup/_components/ShowSkoolProfile';
import UnprotectedDiv from '@/app/(unprotected)/_components/UnprotectedDiv';
// @hector-luengo-guerra-1936
export default function SignupPage() {
  const [showProfile, setShowProfile] = useState(false);

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
      const user = await getUserSkool(data.username);
      console.log('user -->', user);
      if (user) {
        setUserProfile(user as UserProfileTypes);
        setShowProfile(true);
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UnprotectedDiv>
      <form
        onSubmit={handleSubmit(findSkoolUser)}
        id='skool-form'
        className='space-y-4'
      >
        <p className='text-lg font-semibold'>
          Introduce tu username de Skool registrado en Playing the Simulation
        </p>

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
          className='w-full py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 rounded-[10px]'
        >
          {isLoading ? <p>Cargando...</p> : 'Continuar'}
        </button>
        <a
          href='https://skool.com'
          target='_blank'
          rel='noopener noreferrer'
          className=' hover:text-gray-300 transition duration-300'
        >
          No tengo cuenta de Skool
        </a>
      </form>
      {showProfile && (
        <>
          <ShowSkoolProfile />
        </>
      )}
    </UnprotectedDiv>
  );
}
