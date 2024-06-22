import React from 'react';
import { NavLink } from 'react-router-dom';
import NavLinkButton from '@/components/NavLinkButton';

function Navbar() {
  return (
    <nav id='nav'>
      <div id='nav-container'>
        <div id='nav-left'>
          <NavLink to='/home'>
            <h1 className='main-title'>Playing The Simulation</h1>
          </NavLink>
          <NavLinkButton to='/classroom'>Classroom</NavLinkButton>
          <NavLinkButton to='/members'>Miembros</NavLinkButton>
          <NavLinkButton to='/calendar'>Calendario</NavLinkButton>
          <NavLinkButton to='/archives'>Biblioteca</NavLinkButton>
        </div>
        <div id='nav-right'>
          <NavLinkButton to='/community'>Comunidad</NavLinkButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
