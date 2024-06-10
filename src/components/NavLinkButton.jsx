import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinkButton({ children, to }) {
  const isActive = ({ isActive }) =>
    isActive ? "active-link" : "inactive-link";

  return (
    <NavLink to={to} className={isActive}>
      <h2>{children}</h2>
    </NavLink>
  );
}
