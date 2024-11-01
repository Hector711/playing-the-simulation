/** @format */

export interface IconProps {
  className?: string;
  id?: string;
  completed?: boolean;
  subscribed?: boolean;
}

export type PropsTypes = {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  id?: string;
  nav?: { page: string; slug: string; title: string }[];
};

export type EventType = React.ChangeEvent<HTMLInputElement>;

export interface PostTypes {
  id: string;
  name: string;
  labels: string;
  upvotes: number;
  contributors: Contributor[];
  metadata: Metadata;
  post: PostContent;
  user: User;
}

export interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

export interface Contributor {
  firstName: string;
  lastName: string;
  id: string;
  miniAvatar: string;
  username: string;
}

export type Metadata = {
  comments: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export interface PostContent {
  content: string;
  title: string;
}

export interface User {
  username: string;
  id: string;
  firstName: string;
  lastName: string;
  miniAvatar: string;
  score: Score;
}

export interface Score {
  lv: number;
  pts: number;
  role: number;
}

export interface NewsCardTypes {
  id: string;
  type: string;
  user?: {
    firstName: string;
    lastName: string;
    username: string;
  };
  createdAt?: Timestamp;
  post: {
    title: string;
    content: string;
  };
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
  score: {
    lv: number;
    pts: number;
    role: number;
  };
  username: string;
  metadata: {
    lastOffline: Timestamp;
    createdAt: Timestamp;
  };
  label?: string; // Opcional si puede estar vacío
}
