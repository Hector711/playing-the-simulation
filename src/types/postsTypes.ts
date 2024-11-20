import { Score, Metadata } from './index';

export interface CreatorUser {
  username: string;
  id: string;
  firstName: string;
  lastName: string;
  miniAvatar: string;
  score: Score;
}

export interface Contributor {
  firstName: string;
  lastName: string;
  id: string;
  miniAvatar: string;
  username: string;
}

export interface PostContent {
  content: string;
  title: string;
}

export interface PostTypes {
  id: string;
  name: string;
  labels: string;
  upvotes: number;
  contributors: Contributor[];
  metadata: Metadata;
  post: PostContent;
  user: CreatorUser;
}

export interface NewsCardTypes {
  id: string;
  type: string;
  user?: {
    firstName: string;
    lastName: string;
    username: string;
  };
  metadata: Metadata;
  post: {
    title: string;
    content: string;
  };
}
