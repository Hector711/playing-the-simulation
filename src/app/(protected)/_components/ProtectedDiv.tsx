/** @format */

import { PropsTypes } from '@/types';

export default function ProtectedDiv({ children, id }: PropsTypes) {
  return (
    <div className='protected' id={id}>
      {' '}
      {children}
    </div>
  );
}
