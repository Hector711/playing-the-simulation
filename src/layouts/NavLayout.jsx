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
    <nav id='nav'>
      <div id='nav-container'>
        <div id='nav-left'>
          <NavLink to='/home'>
            <h1 className='main-title'>Playing The Simulation</h1>
          </NavLink>
          <NavLinkButton to='/roadto100k'>Road To 100k</NavLinkButton>
          <NavLinkButton to='/classroom'>Classroom</NavLinkButton>
          <NavLinkButton to='/playground'>Playground</NavLinkButton>
          <NavLinkButton to='/members'>Miembros</NavLinkButton>
          <NavLinkButton to='/archives'>Biblioteca</NavLinkButton>
        </div>
        <div id='nav-right'>
          <NavLinkButton to='/community'>Comunidad</NavLinkButton>
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
