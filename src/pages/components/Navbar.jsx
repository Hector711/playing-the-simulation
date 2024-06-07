import React from "react";
import { NavLink } from "react-router-dom";

import NavLinkButton from "./NavLinkButton";

function Navbar() {
  return (
    <nav>
      <div id="nav-container">
        <div id="nav-left">
          <NavLink to="/home">
            <h1>Playing The Simulation</h1>
          </NavLink>
          <NavLinkButton to="/">Classroom</NavLinkButton>
          <NavLinkButton to="/">Miembros</NavLinkButton>
          <NavLinkButton to="/">Eventos</NavLinkButton>
          <NavLinkButton to="/">Biblioteca</NavLinkButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
