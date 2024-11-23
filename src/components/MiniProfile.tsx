import Link from 'next/link';
import Image from 'next/image';
import AvatarUser from '@/app/(protected)/_components/AvatarUser';
import BusinessIcon from '@/icons/BusinessIcon';
import PigIcon from '@/icons/PigIcon';
import GameIcon from '@/icons/GameIcon';
import type { UserProfileTypes } from '@/types/userTypes';

export default function HeaderProfile({
  userProfile,
}: {
  userProfile: UserProfileTypes;
}) {
  return (
    <header id='profile'>
      <Link href='/profile' id='profile-link'>
        <Image
          id='cover'
          src='https://i.ibb.co/frmtYRP/Angel-Caido-5-MB.jpg'
          alt={`Foto de ${userProfile?.firstName} ${userProfile?.lastName}`}
          width={800}
          height={600}
        />
        <AvatarUser
          alt='Foto de perfil'
          src={userProfile?.miniAvatar || ''}
          size='user'
          status='entrepeneur'
        />
        <h4>{`${userProfile?.firstName} ${userProfile?.lastName}`}</h4>
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
