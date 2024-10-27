export interface IconProps {
  className?: string;
  id?: string;
  completed?: boolean;
  subscribed?: boolean;
}

export type Props = {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  id?: string;
  nav?: { page: string; slug: string; title: string }[];
};

export interface PostTypes {
  id: string;
  name: string;
  labels: string;
  upvotes: number;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  user: {
    name: string;
    lastName: string;
    id: string;
    firstName: string;
  };
  post: {
    content: string;
    title: string;
  };
}
