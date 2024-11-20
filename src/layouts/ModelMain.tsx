import { PropsTypes } from '@/types';
import MiniNav from '@/components/MiniNav';

export default function ModelMain({
  className,
  children,
  title,
  id,
  nav,
}: PropsTypes) {
  return (
    <main className={className} id={id}>
      {nav && <MiniNav nav={nav} />}
      {title && (
        <header className={className}>
          <h2 className='impact home'>{title}</h2>
          <hr />
        </header>
      )}
      {children}
    </main>
  );
}
