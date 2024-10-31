import Avatar from '@mui/material/Avatar';

interface AvatarTypes {
  src: string;
  size: 'profile' | 'post' | 'news' | 'user';
  alt: string;
  status: 'investor' | 'entrepeneur' | 'employee';
}
const AVATAR_SIZE = {
  profile: 'avatar-profile',
  post: 'avatar-post',
  news: 'avatar-news',
  user: 'avatar-user',
};
const STATUS = {
  investor: 'investor',
  entrepeneur: 'entrepeneur',
  employee: 'employee',
};

export default function AvatarComponent({
  src,
  size,
  alt,
  status,
}: AvatarTypes) {
  return (
    <div className={`ring-avatar ${STATUS[status]}`}>
      <Avatar
        className={AVATAR_SIZE[size]}
        alt={alt || 'Foto de perfil'}
        src={src || ''}
      />
    </div>
  );
  // }
}
