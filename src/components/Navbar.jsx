import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav id='nav'>
      <div id='nav-container'>
        <div id='nav-left'>
          <NavLink to='/home'>
            <h1 className='main-title'>Playing The Simulation</h1>
          </NavLink>
          <NavLinkButton to='/roadto100k'>Road To 100k</NavLinkButton>
          <NavLinkButton to='/classroom'>Desbloqueables</NavLinkButton>
          <NavLinkButton to='/bonus'>Bonus</NavLinkButton>
          <NavLinkButton to='/members'>Miembros</NavLinkButton>
          <NavLinkButton to='/archives'>Biblioteca</NavLinkButton>
          <NavLinkButton to='/calendar'>Calendario</NavLinkButton>
        </div>
        <div id='nav-right'>
            <NavLinkButton to='/community'>Comunidad</NavLinkButton>
        </div>
      </div>
    </nav>
  );
}

function NavLinkButton({ children, to }) {
  const isActive = ({ isActive }) =>
    isActive ? 'active-link' : 'inactive-link';
  return (
    <NavLink to={to} className={isActive}>
      <h2>{children}</h2>
    </NavLink>
  );
}
