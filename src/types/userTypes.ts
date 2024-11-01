/** @format */

import { Timestamp, Score } from './index';

export interface AvatarTypes {
  src: string;
  size: 'profile' | 'post' | 'news' | 'user';
  alt: string;
  status: 'investor' | 'entrepeneur' | 'employee';
}

export interface UserProfileTypes {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  bio: string;
  avatar: string;
  miniAvatar: string;
  role: string;
  label?: string; // Opcional si puede estar vacío
  username: string;
  score: Score;
  metadata: {
    lastOffline: Timestamp;
    createdAt: Timestamp;
  };
}
