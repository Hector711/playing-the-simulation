'use client'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import DotsIcon from '@/icons/DotsIcon';


export default function Home() {
  const [user] = useAuthState(auth)
  console.log({user})

  const router = useRouter()

  const handleLogOut = () => {
    const logout = auth.signOut()
    if(!logout) {
      console.log('logout error')
    } else {
      router.push('/')
    }
  }

  return (
    <div >
      <DotsIcon />
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}