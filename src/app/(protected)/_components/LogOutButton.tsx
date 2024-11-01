/** @format */

'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/_firebase/_clientConfig';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useUserProfile } from '@/hooks/userProfileHook';
import { UserProfileTypes } from '@/types/userTypes';

export default function LogOutButton() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const { setUserProfile } = useUserProfile();
  const handleLogOut = async () => {
    await axios.post('/api/logout');
    if (user) {
      setUserProfile({} as UserProfileTypes);
      auth.signOut();
      router.push('/');
    }
  };

  return (
    <button className='aside-link orange-hover blurr' onClick={handleLogOut}>
      <span className='impact'>Cerrar sesión</span>
    </button>
  );
}
