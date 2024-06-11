import React from "react";
import { NavLink } from "react-router-dom";
import NavLinkButton from "@/components/NavLinkButton";

function Navbar() {
  return (
    <nav id='nav'>
      <div id="nav-container">
        <div id="nav-left">
          <NavLink to="/home">
            <h1>Playing The Simulation</h1>
          </NavLink>
          <NavLinkButton to="/classroom">Classroom</NavLinkButton>
          <NavLinkButton to="/community">Comunidad</NavLinkButton>
          <NavLinkButton to="/">Eventos</NavLinkButton>
          <NavLinkButton to="/archives">Biblioteca</NavLinkButton>
          <NavLinkButton to="/search">Buscar</NavLinkButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
