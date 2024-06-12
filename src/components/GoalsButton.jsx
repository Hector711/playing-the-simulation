import React from 'react';
import { NavLink } from 'react-router-dom';

export default function GoalsButton({ children }) {
  return (
    <NavLink id='goals-button' to='/goals'>
      <h2>{children}</h2>
    </NavLink>
  );
}
