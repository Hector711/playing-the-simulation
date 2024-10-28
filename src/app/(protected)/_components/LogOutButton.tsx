'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/_firebase/config';
import { useRouter } from 'next/navigation';

export default function LogOutButton() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const handleLogOut = () => {
    if (user) {
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
