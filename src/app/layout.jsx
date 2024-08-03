import { Inter } from "next/font/google";
// INIT
import "@/css/reset/reset.css";
import "@/css/globals.scss";
// LAYOUTS
import "@/css/layout-navbar.scss";
import "@/css/layout-models.scss";
// COMPONENTS
import "@/css/comp-aside-profile.scss";
import "@/css/comp-avatar.scss";

import Navbar from "@/layouts/Navbar";

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

