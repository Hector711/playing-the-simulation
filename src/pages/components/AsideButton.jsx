import React from "react";
import { NavLink } from "react-router-dom";

export default function AsideButton({ children, to }) {
  return (
    <NavLink className="aside-button" to={to}>
      <img className="icon" alt="" />
      <h2>{children}</h2>
    </NavLink>
  );
}
