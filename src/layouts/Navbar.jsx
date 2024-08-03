'use client'
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { title: "Classroom", page: "/classroom" },
    { title: "Playground", page: "/playground" },
    { title: "Members", page: "/miembros" },
    { title: "Biblioteca", page: "/biblioteca" },
  ];
  return (
    <nav id="nav" className="blurr-nav">
      <div id="nav-container">
        <div id="nav-left">
          <Link href="/inicio">
            <h1 className="main-title">Playing The Simulation</h1>
          </Link>
          {navLinks.map((link, i) => (
            <NavLinkButton key={i} href={link.page}>
              {link.title}
            </NavLinkButton>
          ))}
        </div>
        <div id="nav-right">
          {/* <NavLinkButton href='/comunidad'>Comunidad</NavLinkButton> */}
        </div>
      </div>
    </nav>
  );
}

function NavLinkButton({ children, href }) {
  return (
    <Link href={href}>
      <h2>{children}</h2>
    </Link>
  );
}
