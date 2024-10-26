'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config'
import { Props } from '@/types';

export default function Navbar() {
  const [user] = useAuthState(auth)
  if(!user) return null
  return (
    <nav id='nav' className='blurr-nav'>
      <div id='nav-container'>
        <div id='nav-left'>
          <Link href='/home'>
            <h1 className='main-title'>Playing The Simulation</h1>
          </Link>
          {navLinks.map((link, i) => (
            <NavLinkButton key={i} href={link.page}>
              {link.title}
            </NavLinkButton>
          ))}
        </div>
        <div id='nav-right'>

          <NavLinkButton href='/comunidad'>Comunidad</NavLinkButton>
        </div>
      </div>
    </nav>
  );
}

function NavLinkButton({ children, href }: Props & { href: string }) {
  const isActive = usePathname() === href;

  return (
    <Link href={href} className={isActive ? 'active-link' : 'inactive-link'}>
      <h2>{children}</h2>
    </Link>
  );
}

const navLinks = [
  {title: 'Classroom', page: '/classroom'},
  {title: 'Playground', page: '/playground'},
  {title: 'Members', page: '/miembros'},
  {title: 'Biblioteca', page: '/biblioteca'},
]
