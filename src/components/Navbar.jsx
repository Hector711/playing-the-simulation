import React from 'react';
import { NavLink } from 'react-router-dom';
import NavLinkButton from '@/components/NavLinkButton';
// import gambito from '@/icons/gambito.png';

function Navbar() {
  return (
    <nav id='nav'>
      <div id='nav-container'>
        <div id='nav-left'>
          <NavLink to='/home'>
            <h1 className='main-title'>Playing The Simulation</h1>
          </NavLink>
          <NavLinkButton to='/classroom'>Road To 100k</NavLinkButton>
          <NavLinkButton to='/019'>0.19</NavLinkButton>
          <NavLinkButton to='/bonus'>Bonus</NavLinkButton>
          <NavLinkButton to='/members'>Miembros</NavLinkButton>
          <NavLinkButton to='/archives'>Biblioteca</NavLinkButton>
          <NavLinkButton to='/calendar'>Calendario</NavLinkButton>
          <NavLinkButton to='/community'>Comunidad</NavLinkButton>
        </div>
        <div id='nav-right'>
          <NavLink to='/game'>
            {/* <img src={gambito} alt="" id='gambito'/> */}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
