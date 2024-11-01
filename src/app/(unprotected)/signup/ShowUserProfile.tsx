/** @format */

import { useSignUpPhase } from '@/hooks/signUpPhaseHook';
import { useUserProfile } from '@/hooks/userProfileHook';
import Image from 'next/image';

export function ShowUserProfile() {
  const { setSignUpPhase } = useSignUpPhase();
  const { userProfile } = useUserProfile();
  return (
    <>
      <p>Es este tu usuario?</p>
      <div>
        <Image
          src={userProfile?.avatar || ''}
          alt=''
          width={100}
          height={100}
        />
        <p>Username: {userProfile?.username}</p>
        <p>Email: {userProfile?.email} </p>
      </div>
      {/* <pre>{JSON.stringify(userProfile, null, 2)}</pre> */}
      <div>
        <button onClick={() => setSignUpPhase(3)}>Si</button>
        <button onClick={() => setSignUpPhase(0)}>No</button>
      </div>
    </>
  );
}
