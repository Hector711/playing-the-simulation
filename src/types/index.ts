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

export interface Metadata {
  comments: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

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
