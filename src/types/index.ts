export interface IconProps {
  className?: string;
  id?: string
  completed?: boolean
  subscribed?: boolean
}

export type Props = {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  id?: string;
  nav?: { page: string; slug: string; title: string }[];
};