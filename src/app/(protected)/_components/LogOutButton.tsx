'use client';

import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useUserProfile } from '@/hooks/userProfileHook';

export default function LogOutButton() {
  const router = useRouter();
  const { clearUserProfile } = useUserProfile();
  const handleLogOut = async () => {
    const res = await axios.post('/api/logout');
    if (res.status === 200) {
      router.push('/');
      clearUserProfile();
    }
  };

  return (
    <button className='aside-link orange-hover blurr' onClick={handleLogOut}>
      <span className='impact'>Cerrar sesión</span>
    </button>
  );
}
