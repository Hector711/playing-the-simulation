import React from "react";
import Avatar from "./Avatar";
import { NavLink } from "react-router-dom";

export default function Post({ title, description, user, size, url }) {
  return (
    <NavLink to={url}>
      <article className="post">
        <header className="post-user">
          <Avatar size={size} />
          <h4>{user}</h4>
        </header>
        <section>
          <h4>{title}</h4>
          <p>{description}</p>
        </section>
      </article>
    </NavLink>
  );
}
