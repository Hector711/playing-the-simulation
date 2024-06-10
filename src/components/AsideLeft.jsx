import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Avatar from "@/components/Avatar";
import IconNotifications from "@/icons/IconNotifications";
import IconMessages from "@/icons/IconMessages";
import IconSave from "@/icons/IconSave";
import IconGoals from "@/icons/IconGoals";

export default function AsideLeft() {
  const { logout } = useAuth();
  return (
    <aside id="aside-left">
      <header id="profile">
        <NavLink to="/profile" id="profile-link">
          <img id="cover" alt="" />
          <Avatar size="profile" />
          <h4>Héctor Guerra</h4>
        </NavLink>
        <hr />
        <div id="profile-info">
          <h5>Full Stack Web Developer</h5>
          <p>Nivel 4: Funcionario</p>
        </div>
        <hr />
        <NavLink id="goals-link"  to="/goals">
          <IconGoals />
          <h2>Planificación</h2>
        </NavLink>
      </header>
      <section id="profile-links">
        <NavLink className="aside-link" to="/notifications">
          <IconNotifications className='aside-icons'/> <h2>Notificaciones</h2>
        </NavLink>
        <NavLink className="aside-link" to="/saved">
          <IconSave className='aside-icons'/> <h2>Guardados</h2>
        </NavLink>
        <NavLink className="aside-link" to="/messages">
          <IconMessages className='aside-icons'/> <h2>Mensajes</h2>
        </NavLink>
      </section>
      <footer id="logout">
        <NavLink
          id="logout"
          to="/"
          onClick={() => {
            logout();
          }}
        >
          <h4>Cerrar Sesión</h4>
        </NavLink>
      </footer>
    </aside>
  );
}
