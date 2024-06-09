import React from "react";
import { NavLink } from "react-router-dom";


export default function AsideButton({ children, to }) {
  return (
    <NavLink className="aside-button" to={to}>
      <h2>{children}</h2>
    </NavLink>
  );
}
