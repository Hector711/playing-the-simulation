import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  const isActive = ({ isActive }) =>
    isActive ? "active-link" : "inactive-link";
  if (isAuthenticated) {
  }
  return (
    <nav>
      <div id="nav">
        <div id="nav-left">
          <NavLink to="/home" className={isActive}>
            <h1>Playing The Simulation</h1>
          </NavLink>
          <NavLink to="/" className={isActive}>
            <h2>Classroom</h2>
          </NavLink>
          <NavLink to="/" className={isActive}>
            <h2>Miembros</h2>
          </NavLink>
          <NavLink to="/" className={isActive}>
            <h2>Eventos</h2>
          </NavLink>
        </div>
        <div id='nav-right'>
          <button>Gambito AI</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
