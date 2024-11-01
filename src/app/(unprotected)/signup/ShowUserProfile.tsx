/** @format */

import { useSignUpPhase } from '@/hooks/signUpPhaseHook';
import { useUserProfile } from '@/hooks/userProfileHook';

export function ShowUserProfile() {
  const { setSignUpPhase } = useSignUpPhase();
  const { userProfile } = useUserProfile();
  return (
    <>
      <p>Es este tu usuario?</p>
      <div>
        <img src={userProfile?.avatar} alt='' />
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
