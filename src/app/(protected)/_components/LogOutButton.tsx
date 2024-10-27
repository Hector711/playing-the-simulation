'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/_firebase/config';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [user] = useAuthState(auth);
  console.log({ user });

  const router = useRouter();

  const handleLogOut = () => {
    const logout = auth.signOut();
    if (!logout) {
      console.log('logout error');
    } else {
      router.push('/');
    }
  };

  return (
    <button className='aside-link orange-hover blurr' onClick={handleLogOut}>
      <span className='impact'>Cerrar sesión</span>
    </button>
  );
}
