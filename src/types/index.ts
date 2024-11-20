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
  tailwind?: string;
};
export interface ErrorProps {
  error: Error;
  reset: () => void;
}

export type EventType = React.ChangeEvent<HTMLInputElement>;

export interface Score {
  lv: number;
  pts: number;
  role: number;
}

export interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

export type Metadata = {
  comments: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
