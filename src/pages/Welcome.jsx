import React from "react";
import { NavLink } from "react-router-dom";

export default function Welcome() {
  return (

      <div className="flex justify-center items-center w-[100%] h-[100vh] p-[100px]">
        <h1 id="pts-home">Playing The Simulation</h1>

        <div id="auth">
          <NavLink to="/login">
            <h2>Iniciar Sesión</h2>
          </NavLink>
          <NavLink to="/register">
            <h2>Registrarse</h2>
          </NavLink>
        </div>
      </div>

  );
}
