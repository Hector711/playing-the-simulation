'use client'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config'
import { useRouter } from 'next/navigation'
export default function Home() {
  const [user] = useAuthState(auth)
  const router = useRouter()


  console.log({user})

  if(!user){
    router.push('/sign-in')
  }

  return (
    <div >
      <button onClick={() => auth.signOut()}>Log Out</button>
    </div>
  );
}
