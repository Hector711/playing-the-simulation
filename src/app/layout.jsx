import { Inter } from "next/font/google";
import "@/css/reset/reset.css";
import "@/css/globals.css";
import "@/css/init.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Playing The Simulation 2.0",
  description: "Make PTS Great Again",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
