'use client';
import HeaderProfile from '@/components/HeaderProfile';
import { useUserProfile } from '@/hooks/userProfileHook';
import { useEffect } from 'react';

export default function AsideProfile() {
  const { userProfile, loadUserProfile } = useUserProfile();
  console.log('userProfile', userProfile);
  useEffect(() => {
    loadUserProfile();
  }, [loadUserProfile]);

  return <>{userProfile && <HeaderProfile userProfile={userProfile} />}</>;
}