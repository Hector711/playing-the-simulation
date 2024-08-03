import { Inter } from "next/font/google";
// init
import "@/css/reset/reset.css";
import "@/css/globals.scss";
// LAYOUTS
import "@/css/layout-navbar.scss";
import "@/css/layout-models.scss";
// COMPONENTS
import "@/css/comp-aside-profile.scss";
import "@/css/comp-avatar.scss";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Playing The Simulation 2.0",
  description: "Make PTS Great Again",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

function Navbar() {
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
