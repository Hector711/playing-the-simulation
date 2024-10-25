'use client'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config'

export default function Home() {
  const [user] = useAuthState(auth)
  console.log({user})

  return (
    <div >
      <button onClick={() => auth.signOut()}>Log Out</button>
    </div>
  );
}