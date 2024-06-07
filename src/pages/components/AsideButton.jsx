import React from "react";

export default function AsideButton({children}) {
  return (
    <button id='aside-button' >
      <img className="icon" alt="" />
      <h2>
      {children}
      </h2>
    </button>
  );
}
