import { PropsTypes } from '@/types';

export default function UnprotectedDiv({
  children,
  id,
  className,
}: PropsTypes) {
  return (
    <div className={`unprotected ${className}`} id={id}>
      {children}
    </div>
  );
}
