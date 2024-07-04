import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function NavLayout() {
  return (
    <>
      <Navbar />
      <div id='layout'>
        <Outlet />
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav id='nav' className='blurr-nav'>
      <div id='nav-container'>
        <div id='nav-left'>
          <NavLink to='/inicio'>
            <h1 className='main-title'>Playing The Simulation</h1>
          </NavLink>
          {navLinks.map((link, i) => (
            <NavLinkButton key={i} to={link.page}>
              {link.title}
            </NavLinkButton>
          ))}
        </div>
        <div id='nav-right'>
          <NavLinkButton to='/comunidad'>Comunidad</NavLinkButton>
        </div>
      </div>
    </nav>
  );
}

function NavLinkButton({ children, to }) {
  const getClassName = ({ isActive }) =>
    `${isActive ? 'active-link' : 'inactive-link'} white-hover`;

  return (
    <NavLink to={to} className={getClassName}>
      <h2>{children}</h2>
    </NavLink>
  );
}
const navLinks = [
  {title: 'Classroom', page: '/classroom'},
  {title: 'Playground', page: '/playground'},
  {title: 'Members', page: '/miembros'},
  {title: 'Biblioteca', page: '/biblioteca'},
]
