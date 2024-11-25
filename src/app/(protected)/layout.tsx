import type { Metadata } from 'next';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import ProtectedDiv from './_components/ProtectedDiv';

export const metadata: Metadata = {
  title: 'Playing The Simulation',
  description: 'Playing The Simulation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProtectedDiv>
        <Sidebar />
        <Navbar />
        {children}
      </ProtectedDiv>
    </>
  );
}
