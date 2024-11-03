/** @format */

'use client';
import { useEffect } from 'react';
import { useUserProfile } from '@/hooks/userProfileHook';
import Image from 'next/image';
import Link from 'next/link';

export function ShowUserProfile() {
  const { userProfile, loadUserProfile } = useUserProfile();

  useEffect(() => {
    loadUserProfile();
  }, [loadUserProfile]);

  console.log(userProfile);
  return (
    <>
      <p className='text-lg mb-4'>Es este tu usuario?</p>
      <div className='bg-gray-200 shadow-md rounded-lg p-6 mb-4 border border-gray-300'>
        {userProfile?.avatar && (
          <Image
            src={userProfile.avatar}
            alt='Avatar de usuario'
            width={100}
            height={100}
            className='rounded-full mx-auto mb-4'
          />
        )}
        <p className='text-gray-800'>Nombre: {userProfile?.firstName}</p>
        <p className='text-gray-800'>Username: {userProfile?.username}</p>
        <p className='text-gray-600'>Email: {userProfile?.email}</p>
      </div>
      <div className='flex justify-between mt-6'>
        <Link
          href='/signup/username-form'
          className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300'
        >
          No
        </Link>
        <Link
          href='/signup/complete-user-profile'
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300'
        >
          Si
        </Link>
      </div>
    </>
  );
}
