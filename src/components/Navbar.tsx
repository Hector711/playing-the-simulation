/** @format */

'use client';

import Link from 'next/link';
// import { usePathname } from 'next/navigation';

export default function Navbar() {
  return (
    <nav id='nav' className='blurr-nav'>
      <div id='nav-container'>
        <div id='nav-left'>
          <Link href='/home'>
            <h1 className='main-title'>Playing The Simulation</h1>
          </Link>
          {/* {navLinks.map((link, i) => (
            <NavLinkButton key={i} href={link.page}>
              {link.title}
            </NavLinkButton>
          ))} */}
        </div>
        <div id='nav-right'>
          {/* <NavLinkButton href='/comunidad'>Comunidad</NavLinkButton> */}
        </div>
      </div>
    </nav>
  );
}

// function NavLinkButton({ children, href }: { children: React.ReactNode, href: string }) {
//   const isActive = usePathname() === href;
//   return (
//     <Link href={href} className={isActive ? 'active-link' : 'inactive-link'}>
//       <h2>{children}</h2>
//     </Link>
//   );
// }

// const navLinks = [
//   {title: 'Classroom', page: '/classroom'},
//   {title: 'Playground', page: '/playground'},
//   {title: 'Members', page: '/members'},
//   {title: 'Biblioteca', page: '/library'},
// ]
