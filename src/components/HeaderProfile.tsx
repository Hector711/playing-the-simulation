import Link from 'next/link';
import AvatarUser from '@/app/(protected)/_components/AvatarUser';
import BusinessIcon from '@/icons/BusinessIcon';
import PigIcon from '@/icons/PigIcon';
import GameIcon from '@/icons/GameIcon';
import type { UserProfileTypes } from '@/types/userTypes';

export default function MiniProfile({
  userProfile,
}: {
  userProfile: UserProfileTypes;
}) {
  return (
    <header id='header-profile'>
      <Link href='/profile' id='profile-link'>
        <AvatarUser
          alt='Foto de perfil'
          src={userProfile?.miniAvatar || ''}
          size='user'
          status='entrepeneur'
        />
        <div id='name-container'>
          <h4 id='name'>{`${userProfile?.firstName} ${userProfile?.lastName}`}</h4>
          <span id='username'>@{userProfile?.username}</span>
        </div>
      </Link>
      <p id='bio'>{userProfile?.bio}</p>
      <hr />
      <div id='score'>
        <div>
          <BusinessIcon />
          <h6>
            Negocio &#8227;
            <span> Fase 0</span>
          </h6>
        </div>
        <div>
          <PigIcon />
          <h6>
            Fianza &#8227;
            <span> Desactivada &#183; 0€</span>
          </h6>
        </div>
        <div>
          <GameIcon />
          <h6>
            Nivel &#8227;
            <span>
              {' '}
              {userProfile?.score?.lv} &#183; {userProfile?.score?.pts} pts
            </span>
          </h6>
        </div>
      </div>
    </header>
  );
}
