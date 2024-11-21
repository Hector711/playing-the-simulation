'use client';
import { useEffect } from 'react';
import { useUserProfile } from '@/hooks/userProfileHook';
import Image from 'next/image';
import Link from 'next/link';
import SignUpGoogleButton from './SignUpGoogleButton';
import HeaderProfile from '@/components/HeaderProfile';
export function ShowSkoolProfile() {
  const { userProfile, loadUserProfile, clearUserProfile } = useUserProfile();

  useEffect(() => {
    loadUserProfile();
  }, [loadUserProfile]);

  console.log(userProfile);
  return (
    <section className=''>
      <p className='text-lg mb-4 text-center'>Este es tu usuario?</p>
      {/* <div className='flex flex-col gap-1 main-background rounded-lg p-6 mb-4  '>
        {userProfile?.avatar && (
          <Image
            src={userProfile.avatar}
            alt='Avatar de usuario'
            width={100}
            height={100}
            className='rounded-full mx-auto mb-4'
          />
        )}
        <p>
          Nombre: {userProfile?.firstName} {userProfile?.lastName}
        </p>
        <p>Username: @{userProfile?.username}</p>
        <p>Bio: {userProfile?.bio}</p>
        <p>Nivel: {userProfile?.score.lv}</p>
        <p>Puntos: {userProfile?.score.pts}</p>
      </div> */}
      {userProfile && <HeaderProfile userProfile={userProfile} />}
      <div className='flex flex-col gap-3 justify-between mt-6'>
        {userProfile && (
          <>
            <button
              onClick={clearUserProfile}
              className='px-4 py-2 bg-red-800 text-white hover:bg-red-600 transition duration-300 rounded-xl'
            >
              No
            </button>
            <SignUpGoogleButton username={userProfile.username}>
              Si, asociarlo a mi cuenta de Google.
            </SignUpGoogleButton>
          </>
        )}
      </div>
    </section>
  );
}
