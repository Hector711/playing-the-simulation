'use client';
import { useEffect } from 'react';
import { useUserProfile } from '@/hooks/userProfileHook';
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
