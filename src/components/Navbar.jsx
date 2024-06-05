import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  const isActive = ({ isActive }) =>
    isActive ? 'active-link' : 'inactive-link';
  if (isAuthenticated) {
  }
  return (
    <nav>
      <NavLink to='/' className={isActive}>
        <h2>Home</h2>
      </NavLink>
      <NavLink to='/Tasks' className={isActive}>
        <h2>Tasks</h2>
      </NavLink>
      <NavLink to='/add-task' className={isActive}>
        <h2>New Task</h2>
      </NavLink>

      <div id='nav-end'>
        {!isAuthenticated ? (
          <>
            <NavLink to='/login'>
              <h2>Iniciar Sesión</h2>
            </NavLink>
            <NavLink to='/register'>
              <h2>Registrarse</h2>
            </NavLink>
          </>
        ) : (
          <>
            <h2>Profile</h2>
            <NavLink
              to='/'
              onClick={() => {
                logout();
              }}
            >
              <h2>Cerrar Sesión</h2>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
