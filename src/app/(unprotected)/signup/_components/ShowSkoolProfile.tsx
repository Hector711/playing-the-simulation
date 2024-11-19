/** @format */

'use client';
import { useEffect } from 'react';
import { useUserProfile } from '@/hooks/userProfileHook';
import Image from 'next/image';
import Link from 'next/link';
import SignUpGoogleButton from './SignUpGoogleButton';

export function ShowSkoolProfile() {
  const { userProfile, loadUserProfile } = useUserProfile();

  useEffect(() => {
    loadUserProfile();
  }, [loadUserProfile]);

  console.log(userProfile);
  return (
    <section className=''>
      <p className='text-lg mb-4'>Es este tu usuario?</p>
      <div className='flex flex-col gap-1 main-background rounded-lg p-6 mb-4 '>
        {userProfile?.avatar && (
          <Image
            src={userProfile.avatar}
            alt='Avatar de usuario'
            width={100}
            height={100}
            className='rounded-full mx-auto mb-4'
          />
        )}
        <p className='text-gray-800'>Nombre: {userProfile?.firstName} {userProfile?.lastName}</p>
        <p className='text-gray-800'>Username: @{userProfile?.username}</p>
        <p className='text-gray-800'>Nivel: {userProfile?.score.lv}</p>
        <p className='text-gray-800'>Puntos: {userProfile?.score.pts}</p>
      </div>
      <div className='flex flex-col gap-3 justify-between mt-6'>
        <Link
          href='/'
          className='px-4 py-2 bg-red-800 text-white rounded hover:bg-red-600 transition duration-300 rounded-xl'
        >
          No
        </Link>
        <SignUpGoogleButton
        >
          Si, asociarlo a mi cuenta de Google.
        </SignUpGoogleButton>
      </div>
    </section>
  );
}
