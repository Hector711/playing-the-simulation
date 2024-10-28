import { PropsTypes } from '@/types';

export default function UnprotectedDiv({ children, id }: PropsTypes) {
  return (
    <div className='unprotected' id={id}>
      {' '}
      {children}
    </div>
  );
}
