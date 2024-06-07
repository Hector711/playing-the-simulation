import React from 'react';
import { NavLink } from "react-router-dom";
import AsideButton from "@/pages/components/AsideButton";
import { useAuth } from "@/context/AuthContext";


function AsideLeft() {
  const { logout } = useAuth();
  return (
    <aside id="left-aside">
        <section id="profile-section">
          <NavLink to="/profile" id="profile-link">
            <img id="cover" alt="" />
            <img id="avatar" alt="" />
            <h4>Héctor Guerra</h4>
          </NavLink>
          <hr />
          <div id="profile-info">
            <h5>Full Stack Web Developer</h5>
            <p>Nivel 4: Funcionario</p>
          </div>
        </section>
        <AsideButton> Notificaciones</AsideButton>
        <AsideButton> Mis objetivos</AsideButton>
        <AsideButton> Fianza</AsideButton>
        <AsideButton> Mensajes</AsideButton>
        <AsideButton> Guardados</AsideButton>
        <NavLink id='logout'
          to="/"
          onClick={() => {
            logout();
          }}
        >
          <h4>Cerrar Sesión</h4>
        </NavLink>
      </aside>
  )
}

export default AsideLeft