import Link from 'next/link';

export default function GuestLink() {
  return (
    <Link href='/home' className='link' id='guest-link'>
      Entrar como invitado
    </Link>
  );
}